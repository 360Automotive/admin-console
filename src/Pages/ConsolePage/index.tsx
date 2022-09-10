import { CustomerBar } from "./CustomerBar"
import { Page } from "../../common/Page"
import { FC, useEffect, useContext } from "react"
import { observer } from "mobx-react-lite"
import { StoreContext } from "../../store.context"
import { Header } from "../../components/Header/Header"

export const ConsolePage: FC = observer(() => {

    const { organizationStore } = useContext(StoreContext)

    useEffect(() => {
        getOrg()
    }, [])

    const getOrg = async () => {
        await organizationStore.getOrganizations()
    }

    return (
        <Page title="Customers" >
            <Header columns={["Shop Name", "Status", "Address", "Phone Number"]} />
            {
                organizationStore.organizations.map((_, idx) => {
                    return (
                        <CustomerBar
                            key={idx}
                            name={_.company_name}
                            status="Active"
                            manager={_.company_address}
                            phone={_.company_phonenumber}
                        />
                    )
                })
            }
        </Page>
    )
})