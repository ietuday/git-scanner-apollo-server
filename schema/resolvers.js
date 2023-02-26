const axios = require('axios')
const resolvers = {
    Query: {
        async repoList() {
            const apiResponse = await axios.get("https://api.github.com/users/ietuday/repos")
            return apiResponse.data;

        },
         async repoDetails() {
            const apiResponse = await axios.get("https://api.github.com/repos/ietuday/node-inverisify-repository-pattern")
            const repoContest = await axios.get("https://api.github.com/repos/ietuday/node-inverisify-repository-pattern/contents")
            const ymlfile = repoContest.data.filter((item) => {
                const sub = item.name.substring(item.name.lastIndexOf('.') + 1)
                console.log("subbb", sub)
                if (sub === "yml" || sub === "yaml") {
                    return item.name
                }
            })
            if(ymlfile.length>0){
                const ymlContest = await axios.get(`https://api.github.com/repos/ietuday/node-inverisify-repository-pattern/contents/${ymlfile[0].name}`)
                return [{...apiResponse.data, ...{ymlContent: ymlContest.data.content, NoOfFile: repoContest.length}}]
                    
            }
            return [{...apiResponse.data,  ...{NoOfFile: repoContest.length}}]

           
            

        }
    }
}

module.exports = { resolvers }