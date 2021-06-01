using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ViewModel;
using BusinessRepository;

namespace KratinPro.Controllers
{
    public class GovtSchemeController : Controller
    {
        // GET: GovtScheme
        Repository repository = new Repository();
        public ActionResult NPHCEScheme1()
        {
            return View();
        }
        public ActionResult MedicalClaimScheme()
        {
            return View();
        }
        [HttpPost]
        public JsonResult AddUserForScheme(VMNPHCESchme vmAddUser)
        {
            bool Response;
            try
            {
                Response = repository.AddUserForScheme(vmAddUser);
            }
            catch (Exception ex)
            {

                Response = false;
            }
            return Json(Response);

        }

        public JsonResult GetTables()
        {
            VMGenderMarritalStatus vmct = new VMGenderMarritalStatus();
            try
            {
                vmct = repository.GetTables();
            }
            catch (Exception ex)
            {
                vmct = new VMGenderMarritalStatus();
            }

            return Json(vmct);
        }
    }
}