import https from 'https';

const url = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@cybersphere.official";

https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        try {
            const json = JSON.parse(data);
            console.log("Status:", json.status);
            if (json.feed) {
                console.log("Feed Title:", json.feed.title);
            }
            if (json.items) {
                console.log("Items count:", json.items.length);
                json.items.forEach(item => console.log("- " + item.title));
            } else {
                console.log("No items found:", json);
            }
        } catch (e) {
            console.error("Error parsing JSON:", e.message);
            console.log("Raw data:", data);
        }
    });
}).on('error', (e) => {
    console.error("Error fetching:", e.message);
});
