import { Button, Text } from "@geist-ui/core"
import { useEffect, useRef, useState } from "react"
import Navbar from "../components/Navbar"
import axios from "axios"

const Landing = () => {
    const [file, setFile] = useState(null)
    const inputReference = useRef(null)

    function fileUploadButton() {
        document.getElementById('fileButton').click()
        document.getElementById('fileButton').onchange = () => {
            setFile(inputReference.current.files[0])
        }
    }

    useEffect(() => {
        if (file) {
            let formData = new FormData()
            formData.append("file", file)
            axios.post("http://127.0.0.1:5000/processing", formData)
        }
    }, [file])

    return (
        <>
            <Navbar />
            <div style={{ marginTop: 100, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Text h1 style={{ fontSize: 60 }}>Generate better insights <span class="sketch-highlight">with AI</span></Text>
                <input id="fileButton" type="file" accept=".csv" hidden ref={inputReference} />
                <Button onClick={fileUploadButton} style={{ marginTop: 20 }} width="30%">Upload data</Button>
            </div>
        </>
    )
}

export default Landing