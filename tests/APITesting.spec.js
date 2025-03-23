const {test} = require('@playwright/test')


test('API GET Request', async({request})=>{
    const response = await request.get("https://reqres.in/api/users", {params : {page : 2}})
    console.log(await response.json())
})

test("API POST Request", async({request})=>{
    const response = await request.post("https://reqres.in/api/users", { data: {
        "name": "morpheus",
        "job": "leader"
    },
    headers : {

    }
        
    })
    console.log(await response.json());
})

test('API PUT Request', async({request})=>{
    const response = await request.put("https://reqres.in/api/users/2", { data :
        {
            "name": "morpheus",
            "job": "zion resident"
        }
    })
    console.log(await response.json())
})