var ManageRegistrationPage = function () {
    var init = function () {
        BindEvent();
        GetGender();
    };
    var BindEvent = function () {
        $('#btnCancel').click(function () {
            Clear();
        });
        $('#btnRegister').click(function () {
            //var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

            if ($('#txtFirstName').val() == "") {
                alert('Please Enter First Name...');
                $('#txtFirstName').focus();
                return false;
            }
            else if ($('#txtLastName').val() == "") {
                alert('Please Enter Last Name....');
                $('#txtlastName').focus();
                return false;
            }
            else if ($('#ddlGender').val() <= 0) {
                alert('Please Enter Gender');
                $('#ddlGender').focus();
                return false;
            }
            else if ($('#dtDOB').val() == "") {
                alert('please Enter Date of Birth');
                $('#dtDOB').focus();
                return false;
            }
            else if (($('#txtPwd').val() == "")) {
                alert('Please Enter your Password...');
                $('#txtPwd').focus();
                return false;
            }
            else if (($('#txtPwd').val() != $('#txtConfirmPwd').val())) {
                alert('Password and Confirm Password must be match.');
                $('#txtConfirmPwd').focus();
                return false;
            }
            else if ($('#txtMobileNo').val() == "") {
                alert('Please Enter Mobile No.');
                $('#txtMobileNo').focus();
                return false;
            }
            //else if (!$('#txtMobileNo').val().match(phoneno)) {

            //    alert("Please Correct 10 digit mobile number");
            //    $('#txtMobileNo').focus();
            //    return false;
            //}
            var email = document.getElementById("txtEmail")

            if (email.value.trim() != "") {
                if (IsEmail(email.value) == false) {
                    alert("Please Enter Correct Email Id");
                    $('txtEmail').focus();
                    return false;
                }
            }
            var email = $('#txtEmail');
            function IsEmail(email) {
                var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                if (!regex.test(email)) {
                    return false;
                } else {
                    return true;
                }
            }
            var formData = {
                UserInfoId: $('#UserInfoIdId').val(),
                FirstName: $('#txtFirstName').val(),
                LastName: $('#txtLastName').val(),
                DOB: $('#dtDOB').val(),
                GenderId: $('#ddlGender').val(),
                MobileNO: $('#txtContact').val(),
                Email: $('#txtEmail').val(),
                PassWd: $('#txtPwd').val(),

            };
            SaveData(formData);
        });
    };

    var SaveData = function (formData) {
        $.ajax({
            url: "/UserRegistration/AddUser/",
            type: "POST",
            data: formData,
            success: function (data) {
                if (data) {
                    alert("User Register succesfully");
                    Clear();
                    window.location.href = "/LoginForm/ManageLoginPage";
                    $('#btnRegister').text('Register');
                    $('#btnRegister').prop('disabled', false);
                }
                else {
                    alert("Something went wrong, please try again later.");
                    $('#btnRegister').text('Register');
                    $('#btnRegister').prop('disabled', false);
                }
            },
            error: function (errResponse) {
                console.log(errResponse);
            }
        });
    };
    var GetGender = function () {
        $.ajax({
            url: "/UserRegistration/GetGender",
            type: "POST",
            success: function (data) {
                RenderGetGenderForDropdown(data);
            },
            error: function (errResponse) {
                console.log(errResponse);
            }
        });
    };
    var RenderGetGenderForDropdown = function (data) {
        var control = $("#ddlGender");
        control.empty();
        $.each(data, function (i, valueee) {
            control.append($("<option />").val(valueee.GenderId).text(valueee.GenderName));
        });
        control.prepend($("<option selected='selected' />").val(0).text("Please select Gender"));
    };

    var Clear = function () {
        $('#UserInfoIdId').val(0),
        $('#txtFirstName').val(''),
        $('#txtLastName').val(''),
        $('#dtDOB').val(''),
        $('#ddlGender').val(0),
        $('#txtMobileNo').val(''),
        $('#txtEmail').val(''),
         $('#txtPwd').val(''),
         $('#txtConfirmPwd').val('')
        
    };
        return {
            Init: init
        };
    }();