const { Client } = require("@notionhq/client");
require("dotenv").config();

const key = process.env.NOTION_API_KEY;
const databaseID = process.env.NOTION_API_DATABASE;

const notion = new Client({
    auth: key
});


exports.getDatabase = async function () {
    const response = await notion.databases.query({ database_id: databaseID });

    const responseResults = response.results.map((page) => {
        return page.properties["Name"]["title"].length > 0 && page.properties["Attendance"]["multi_select"].length > 0
            ? {
                id: page.id,
                name: page.properties["Name"]["title"][0].plain_text,
                attendance: page.properties["Attendance"]["multi_select"][0].name,
                present: page.properties["presentDays"]["rich_text"][0].plain_text,
                email: page.properties["Email"]["rich_text"][0].plain_text,
            }
            : null;
    });

    return responseResults;
};