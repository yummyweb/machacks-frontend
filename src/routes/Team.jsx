import { Text, Grid, Card, Avatar } from "@geist-ui/core"
import Navbar from "../components/Navbar"

const Team = () => {
    return (
        <>
            <Navbar />
            <div style={{ marginTop: 50, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Text h1 style={{ fontSize: 50 }}>Our Team</Text>
                <Grid.Container style={{ marginTop: 30 }} gap={2} justify="center" height="100px">
                    <Grid xs={6}>
                        <Card style={{ padding: 0 }} shadow width="100%">
                            <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                                <Avatar height={3} width={3} style={{ margin: 0, padding: 0 }} src="https://avatars.githubusercontent.com/u/58990164?v=4" />
                                <Text style={{ padding: 0, margin: 0, marginTop: 10 }} h3>Ahmet Dumlu</Text>
                            </div>
                        </Card>
                    </Grid>
                    <Grid xs={6}>
                        <Card style={{ padding: 0 }} shadow width="100%">
                            <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                                <Avatar height={3} width={3} style={{ margin: 0, padding: 0 }} src="/team/antariksh.jpg" />
                                <Text style={{ padding: 0, margin: 0, marginTop: 10 }} h3>Ahmed Elbarbary</Text>
                            </div>
                        </Card>
                    </Grid>
                    <Grid xs={6}>
                        <Card style={{ padding: 0 }} shadow width="100%">
                            <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                                <Avatar height={3} width={3} style={{ margin: 0, padding: 0 }} src="/team/antariksh.jpg" />
                                <Text style={{ padding: 0, margin: 0, marginTop: 10 }} h3>Antariksh Verma</Text>
                            </div>
                        </Card>
                    </Grid>
                </Grid.Container>
            </div>
        </>
    )
}

export default Team