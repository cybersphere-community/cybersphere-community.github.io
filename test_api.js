// Native fetch is available in Node.js 18+

async function testAPIs() {
    const timestamp = new Date().getTime();
    console.log("Timestamp:", timestamp);

    const devToUrl = `https://dev.to/api/articles?username=harsh_hak&t=${timestamp}`;
    const mediumUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(`https://medium.com/feed/@cybersphere.official?t=${timestamp}`)}`;

    console.log(`Fetching Dev.to: ${devToUrl}`);
    try {
        const devToRes = await fetch(devToUrl);
        console.log(`Dev.to Status: ${devToRes.status}`);
        if (devToRes.ok) {
            const data = await devToRes.json();
            console.log(`Dev.to Articles Found: ${data.length}`);
        } else {
            console.log("Dev.to Error:", await devToRes.text());
        }
    } catch (error) {
        console.error("Dev.to Fetch Failed:", error);
    }

    console.log(`Fetching Medium: ${mediumUrl}`);
    try {
        const mediumRes = await fetch(mediumUrl);
        console.log(`Medium Status: ${mediumRes.status}`);
        if (mediumRes.ok) {
            const data = await mediumRes.json();
            console.log(`Medium Status Key: ${data.status}`);
            if (data.items) {
                console.log(`Medium Articles Found: ${data.items.length}`);
            }
        } else {
            console.log("Medium Error:", await mediumRes.text());
        }
    } catch (error) {
        console.error("Medium Fetch Failed:", error);
    }
}

testAPIs();
