import { Text, Grid, Card, Avatar, Link } from "@geist-ui/core"
import Navbar from "../components/Navbar"
import { BsGithub } from "react-icons/bs"
import { SiDevpost } from "react-icons/si"

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
                                <Text style={{ padding: 0, margin: 0, marginTop: 10, marginBottom: 15 }} h3>Ahmet Dumlu</Text>
                                <div style={{ display: "flex", justifyContent: "space-evenly", width: "30%" }}>
                                    <Link target="_blank" href="https://github.com/ahmetdumlu"><BsGithub size={25} /></Link>
                                    <Link target="_blank" href="https://devpost.com/dumlua"><SiDevpost size={25} /></Link>
                                </div>
                            </div>
                        </Card>
                    </Grid>
                    <Grid xs={6}>
                        <Card style={{ padding: 0 }} shadow width="100%">
                            <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                                <Avatar height={3} width={3} style={{ margin: 0, padding: 0 }} src="https://avatars.githubusercontent.com/u/90804183?v=4" />
                                <Text style={{ padding: 0, margin: 0, marginTop: 10, marginBottom: 15 }} h3>Ahmed Elbarbary</Text>
                                <div style={{ display: "flex", justifyContent: "space-evenly", width: "30%" }}>
                                    <Link target="_blank" href="https://github.com/elbarbaa"><BsGithub size={25} /></Link>
                                    <Link target="_blank" href="https://github.com/elbarbaa"><SiDevpost size={25} /></Link>
                                </div>
                            </div>
                        </Card>
                    </Grid>
                    <Grid xs={6}>
                        <Card style={{ padding: 0 }} shadow width="100%">
                            <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                                <Avatar height={3} width={3} style={{ margin: 0, padding: 0 }} src="/team/antariksh.jpg" />
                                <Text style={{ padding: 0, margin: 0, marginTop: 10, marginBottom: 15 }} h3>Antariksh Verma</Text>
                                <div style={{ display: "flex", justifyContent: "space-evenly", width: "30%" }}>
                                    <Link target="_blank" href="https://github.com/yummyweb"><BsGithub size={25} /></Link>
                                    <Link target="_blank" href="https://devpost.com/yummyweb"><SiDevpost size={25} /></Link>
                                </div>
                            </div>
                        </Card>
                    </Grid>
                </Grid.Container>
            </div>
        </>
    )
}

export default Team