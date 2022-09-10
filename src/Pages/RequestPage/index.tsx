import { Page } from "../../common/Page"
import { FC, useState, useContext, useEffect } from "react"
import { Typography } from "../../common/Typohraphy"
import styles from "./index.module.scss"
import { RequestBar } from "./RequestBar"
import { Modal } from "../../common/Modal"
import { observer } from "mobx-react-lite"
import { StoreContext } from "../../store.context"
import { ApproveRequest } from "../../data-tranfer-objects/request/approve-request.dto"
import { useNavigate } from "react-router-dom"
import { Header } from "../../components/Header/Header"

export const RequestPage: FC = observer(() => {

    const [current, setCurrent] = useState<ApproveRequest>()
    const [visible, setVisible] = useState(false)
    const { organizationStore } = useContext(StoreContext)
    const navigate = useNavigate()

    const getList = async () => {
        await organizationStore.getOrganizations()
        await organizationStore.getRequestList()
    }

    useEffect(() => {
        getList()
    }, [])


    const openModal = (id: number) => {
        setCurrent({ companyId: id, isActive: true })
        setVisible(true)
    }

    const approveRequest = async () => {
        await organizationStore.approveRequest(current!)
        setVisible(false)
        navigate("/console") 
        organizationStore.runSnackbar()
    }

    const cancelRequest = () => {
        setCurrent(undefined)
        setVisible(false)
    }
    return (
        <Page title="Requests" >
            <Header columns={["Shop Name", "TAX ID", "Phone Number", "Actions"]} />
            {
                organizationStore.organizations.map((_) => {
                    return organizationStore.requestList.map((id, idx) => {
                        return _.id === id ?
                            <RequestBar
                                key={idx}
                                name={_.company_name}
                                taxId={_.company_tax_id}
                                phonenumber={_.company_phonenumber}
                                onApprove={() => openModal(id)}
                            /> : undefined
                    })
                })
            }
            <Modal
                onApprove={approveRequest}
                onCancel={cancelRequest}
                setVisible={setVisible}
                visible={visible}
            />
        </Page>
    )
})