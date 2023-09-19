
// get the all workout (GET )

const getAll =  (req,res) =>{
    
     res.status(404).json({error:"Access Denied"})
  
}
// get the all workout (GET )

const getOne =  (req,res) =>{
    const { id } = req.params

    if( id=="justwanttotelltruth")
    {
        
        res.status(200).json({Access_ID:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGRlMTgyNWFkMDgwM2QzMGJlMDM5ZDIiLCJpYXQiOjE2OTUxMzYzMzUsImV4cCI6MTY5NTM5NTUzNX0.gZ7rf2rvUY59ZJI1ix55CEEZCCRehJz3Ne1llRW5FFI",
                              User_Name:"justwanttotelltruth",
                              name:"Some one of Pratik",
                              Post:"0",
                              Followers:"0",
                              Following:"0",
                              Created_On:"2023-09-16T18:39:02.00Z",
                              Status:"Deleted",
                              Initial_Device:"OnePlus 6",
                              Initial_Location:"Kalyani Nagar - Wadgaon Sheri Rd, New Kalyani Nagar, Digambar Nagar, Kalyani Nagar, Pune, Maharashtra 411014",
                              Last_Date:"2023-10-17",
                              Session_ID:"sehsovhrfgjfkf2123",
                              Session_expires:"2023-09-19T14:56:18.00Z"
                              
    })

    }
    else    
    {
        res.status(404).json({err:"Access Denied"})
    }
}

module.exports = {getAll, getOne}