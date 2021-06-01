using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ViewModel
{
   public class VMUserInfo
    {
        public int UserInfoId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PassWd { get; set; }
        public string MobileNO { get; set; }
        public string Email { get; set; }
        public System.DateTime DOB { get; set; }
        public int GenderId { get; set; }
    }
}
