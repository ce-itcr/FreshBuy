using FreshBuy.Models;
using FreshBuy.src;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Results;

namespace FreshBuy.Controllers
{

    [EnableCors(origins: "http://localhost:4200/", headers: "*", methods: "*")]
    public class AdminController : ApiController
    {
        [HttpGet]
    [Route("api/Admin/Producers/getProducers")]
    public string[] getProducers()
    {
        AdminModel adminModel = new AdminModel();
        string[] result = adminModel.find_producers();

       return result;
    }
    }
}
