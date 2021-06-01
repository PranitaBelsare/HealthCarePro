using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using BusinessRepository;
using ViewModel;

namespace KratinPro.Controllers
{
    public class UserRegistrationController : Controller
    {
        // GET: UserRegistration
        Repository repository = new Repository();
        public ActionResult ManageUserDetails()
        {
            return View();
        }
        [HttpPost]
        public JsonResult AddUser(VMUserInfo vmAddUser)
        {
            bool Response;
            try
            {
                Response = repository.AddUser(vmAddUser);
            }
            catch (Exception ex)
            {

                Response = false;
            }
            return Json(Response);
        }
        public JsonResult GetGender()
        {
            List<VMGender> GetGenderObj = new List<VMGender>();
            try
            {
                GetGenderObj = repository.GetGender();
            }
            catch (Exception ex)
            {
                GetGenderObj = new List<VMGender>();
            }

            return Json(GetGenderObj);
        }
        //public JsonResult ChechkMobileNO(string MobileNO)
        //{
        //    bool Response = false;
        //    try
        //    {
        //        Response = repository.CheckMobileNO(MobileNO);
        //    }
        //    catch (Exception ex)
        //    {

        //        Response = false;
        //    }
        //    return Json(Response);
        //}
    }
}