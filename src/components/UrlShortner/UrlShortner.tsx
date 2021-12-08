import { useState } from 'react';
import { BitlyClient } from 'bitly';
import dotenv from 'dotenv';
dotenv.config();

const UrlShortener = () => {

    const configValue: string = process.env.REACT_APP_TOKEN!
    const bitly = new BitlyClient(configValue, {});

    const [url, setUrl] = useState("")
    const [shortenUrl, setShortenUrl] = useState<string | undefined>(undefined)


    const getData = async (url: string) => {
        try {

            const response = await bitly.shorten(url)
            const result = response.link;
            console.log('result:', result)
            setShortenUrl(result)
        } catch (err) {
            return alert("Please Enter Valid URL")
        }
    }


    const handleClick = (url: string) => {

        getData(url)
    }


    return (
        <div>
            <h1>Enter The Url To Short</h1>
            <input
                onChange={e => setUrl(e.target.value)}
                placeholder="Enter the url"
                type="url" />

            <button
                onClick={() => {
                    handleClick(url)
                }}
            >Shorten</button>
            <div>{shortenUrl}</div>
        </div>
    )
}

export { UrlShortener }
