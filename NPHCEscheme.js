var ManageSchemePage = function () {
    var init = function () {
        BindEvent();
        GetTablesForDropdown();
    };
    var BindEvent = function () {
        
        $('#btnRegisterForScheme').click(function () {
            var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

            if ($('#txtFullName').val() == "") {
                alert('Please Enter Full Name...');
                $('#txtFullName').focus();
                return false;
            }
            else if ($('#txtBranchName').val() == "") {
                alert('Please Enter Branch Name....');
                $('#txtBranchName').focus();
                return false;
            }
            else if ($('#ddlGender').val() <= 0) {
                alert('Please Enter Gender');
                $('#ddlGender').focus();
                return false;
            }
            else if ($('#ddlMarritalStatus').val() <= 0) {
                alert('Please select Marrital status');
                $('#ddlMarritalStatus').focus();
                return false;
            }
            else if ($('#txtAccNo').val() <= 20) {
                alert('Please Enter Valid Account No');
                $('#txtAccNo').focus();
                return false;
            }
            else if ($('#txtAge').val() <= 65) {
                alert('Please Enter Valid Age (Age>65)');
                $('#txtAge').focus();
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
            else if ($('#txtContact').val() == "") {
                alert('Please Enter Mobile No.');
                $('#txtContact').focus();
                return false;
            }
            else if (!$('#txtContact').val().match(phoneno)) {

                alert("Please Correct 10 digit mobile number");
                $('#txtContact').focus();
                return false;
            }
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
                NPHCESchmeId: $('#NPHCESchmeId').val(),
                FullName: $('#txtFullName').val(),
                GenderId: $('#ddlGender').val(),
                MarritalStatusId: $('#ddlMarritalStatus').val(),
                DOB: $('#dtDOB').val(),
                MobileNo: $('#txtContact').val(),
                BankAccNo: $('#txtAccNo').val(),
                BankBranch: $('#txtBranchName').val(),
                AadharNo: $('#txtAddharNo').val(),
                Email: $('#txtEmail').val(),
                Age: $('#txtAge').val(),
            };
            SaveData(formData);
            $("#btnRegisterForScheme").text(" Processing...");
            $('#btnRegisterForScheme').prop('disabled', false);
        });
    };

    var SaveData = function (formData) {
        $.ajax({
            url: "/GovtScheme/AddUserForScheme/",
            type: "POST",
            data: formData,
            success: function (data) {
                if (data) {
                    alert("Data added successfully.");
                    Clear();
                    window.location.href = "/ElderCare/ElderCarePage";
                    $('#btnRegisterForScheme').text('Register');
                    $('#btnRegisterForScheme').prop('disabled', false);
                }
                else {
                    alert("Something went wrong, please try again later.");
                    $('#btnRegisterForScheme').text('Register');
                    $('#btnRegisterForScheme').prop('disabled', false);
                }
            },
            error: function (errResponse) {
                console.log(errResponse);
            }
        });
    };

    var GetTablesForDropdown = function () {
        $.ajax({
            url: "/GovtScheme/GetTables/",
            type: "POST",
            success: function (data) {
                RenderGenderForDropdown(data["Gender"]);
                RenderMarritalStatusForDropdown(data["MarritalStatus"]);
            },
            error: function (errResponse) {
                console.log(errResponse);
            }
        });
    };
    var RenderGenderForDropdown = function (data) {
        var control = $("#ddlGender");
        control.empty();
        $.each(data, function (i, valueee) {
            control.append($("<option />").val(valueee.GenderId).text(valueee.GenderName));
        });
        control.prepend($("<option selected='selected' />").val(0).text("Please select Gender"));
    };
    var RenderMarritalStatusForDropdown = function (data) {
        var control = $("#ddlMarritalStatus");
        control.empty();
        $.each(data, function (i, valueee) {
            control.append($("<option />").val(valueee.MarritalStatusId).text(valueee.MarritalStatus));
        });
        control.prepend($("<option selected='selected' />").val(0).text("Please select Gender"));
    };
    return {
        Init: init
    };
}();