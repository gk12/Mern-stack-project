class ApiFeatures{
    constructor(query,queryStr)
    {
        this.query=query;
        this.querystr=queryStr;
    }

    search(){
        const keyword=this.queryStr.keyword?
        {
            name:{
                $regex:this.queryStr.keyword,
                $options:"i",
            },
        }
        :{};
        this.query=this.query.find({...keyboard});
        return this;
    }
}
module.exports=ApiFeatures;