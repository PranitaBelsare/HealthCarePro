var ManageLoginPage = function () {
    var init = function () {
        BindEvent();
    };
    var BindEvent = function () {
        $('#btnLogin').click(function () {
            var formData = {
                UserInfoId: $('#UserInfoIdId').val(),
                FirstName: $('#txtUserName').val(),
                MobileNO: $('#txtMobileNo').val(),
                Email: $('#txtEmail').val(),
                PassWd: $('#txtLoginPassword').val(),
            };
            SaveData(formData);
            $("#btnLogin").text(" Processing...");
            $('#btnLogin').prop('disabled', false);
        });
    };
    var SaveData = function (formData) {
        $.ajax({
            url: "/LoginForm/LoginUser",
            type: "POST",
            data: formData,
            success: function (data) {
                if (data) {
                    alert("Login succesfully");
                    Clear();
                    $('#btnLogin').text('Login');
                    $('#btnLogin').prop('disabled', false);
                    window.location.href = "/ElderCare/ElderCarePage";
                }
                else {
                    alert("Please enter correct UserName Or Password");
                    $('#btnLogin').text('Login');
                    $('#btnLogin').prop('disabled', false);
                }
            },
            error: function (errResponse) {
                console.log(errResponse);
            }
        });
    };

    var Clear = function () {
        $('#txtUserName').val(''),
         $('#txtLoginPassword').val('')

    };
    return {
        Init: init
    };
}();