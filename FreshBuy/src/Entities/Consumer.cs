using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FreshBuy.src.Entities
{
    public class Consumer
    {
        public int person_id;
        public String name;
        public String last_name;
        public String province;
        public String canton;
        public String district;
        public String email;
        public String username;
        public String password;

        public Consumer() { }
    }
}