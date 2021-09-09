
const   Strings  = {
     AppName : "WoofLocal",
 
     login : 'login',
     device_token : "device_token",
     collectDate : 'collectDate',
     device_ios : "ios",
     device_android : "android",
     secret_key : "kEynEst",
     loginToken : "login token",
     registrationData : "registrationData",
     latLong : "latlong",
     userAcessAppFirstTime : "userAcessAppFirstTime",
     underWorking : "Under Working",
     locationMessage : "App wants to get device current location",
     backOnline : "Back online",
     noConnection : "No connection",
     Accept : "Accept",
     Decline : "Decline",
     availablePlaymates : "Available Playmates",
 
    //    for notification string
     on_Received_Forground : "on Received Forground",
     on_Tapped : "on Tapped",
 
    // Common Screen
     ok : "Ok",
     cancle : "Cancel",
     continue : "Continue",
     exitApp : "Exit App",
     no_record_found : "No Woof! Playmates found nearby. Access 'Settings' in 'Edit My Profile' and try to widen your search radius or try searching in a different postcode",
     common_no_record_found : "No Record Found",
     group_name : "Group name",
     plz_enter_group_name : "Please enter group name",
     YourAccountIsDeletedByAdminPleaseContactAdmin : "Your account is deleted by admin, Please contact admin.",
     thisUserNoLonggerAvailable : "This User No Longger Available.",
 
    // login screen
     email : "Email",
     password : "Password",
     login : "LOGIN",
     forgotPassword : "Forgot details?",
     forgotPasswordBtn : "FORGOT PASSWORD",
     userName : "User Name",
     new_here_registration : "NEW HERE? REGISTER",
     login_with_google : "Login with Google",
     login_with_Apple : "Login with apple",
     loginFailWithFacebook : "Login fail with error",
     showPassword : "SHOW PASSWORD",
     hidePassword : "HIDE PASSWORD",
 
    //    splace screen 
     version_number : "Version Number",
 
    // registration screen 
     verificationCode : "Verification Code",
     UserDetail : "User Detail",
     registration : "REGISTRATION",
     enterVerificationCode : "Enter verification code.",
     verifyCode : "Verify Code",
     verifyCodeTitle : "VERIFICATION CODE",
     create_new_account : "CREATE A NEW ACCOUNT",
     You_have_alredy_account : "You have alredy account ?",
     createNewAccount : "Create New Account",
     image_not_found : "Image url is not valid ",
 
    //    forgot Password
     backToLogin : "BACK TO LOGIN",
 
    // tab bar screen
     profile : "MY PROFILE",
     chat : "WOOF CHAT",
     ask : "ASK",
     playCard : "PLAY",
     group : "WOOF GROUP",
     playmateProfile : "PLAYMATE PROFILE",
     playmates : "FIND A PLAYMATE",
 
    //profile screen
     name : 'Name',
     owner : 'Owner',
     age : 'Age',
     breed : 'Breed',
     sex : 'Sex',
     interests : 'Interests',
     immunisation : 'Immunisation',
     Links : "Links",
     linkNotValid : "Link is not valid",
 
    //Edit profile screen
     editProfile : "EDIT MY PROFILE",
     dogName : "Dog Name",
     breed : "Breed",
     DOB : "Date of birth",
     ownerName : "Owner Name",
     loveDoing : "Love Doing",
     images : "Images (1 profile image is required)",
     immunisationsArray : ['Distemper', 'measles', 'parainfluenza', 'DHPP', 'Rabies'],
     socialMediaPlaceHolder : "(Ex: https://www.",
     socialMediaLinkText : "Add links – Facebook / Instagram / blog etc.",
 
    // Find Play Mates Screen
     bread : "Breed",
     immunisations : "Immunisations",
     friendRequestConfirmationMessage : "Do you want to send friend request?",
     blockConfirmationMessage : "Do you want to block this user?",
     notAMemberString : "Please use the paws icon to connect with playmate before you can see the full profile",
     milesAwway : "miles away",
     kmAway : "km away",
     meterAway : "metre away",
     becomeAMember : "Become a member",
 
    //Settings
     settings : "SETTINGS",
     LogOut : "LogOut",
     Unit : "Unit",
     Miles_imperial : "Miles (imperial)",
     Kilometers_metric : "Kilometers (metric)",
     Postal_Code : "Postal Code",
     Notifications_and_alerts : "Notifications and alerts",
     New_connection_alert : "New connection Alert",
     Incomming_messages : "Incomming messages",
     New_advice_milestone : "New advice/milestone",
     New_Playmates_found : "New Playmates found",
 
    // Upgrade Screen
     upgrade : "UPGRADE ACCOUNT",
     paymentPlanWarning : "Cancel at any time - you will be asked for renew 7 days before the payment plan finishes",
 
    // RedeemVoucher Screen
     RedeemVouche : "REDEEM VOUCHER",
     RedeemCode : "Redeem Code",
     PaymentPlans : "Payment Plans",
     oneMonthDesc : "Pay as you go 1 month at a time",
     sixMonthDesc : "Pay 6 months at a time",
     yearlyDesc : "Pay 12 months at a time",
    //   GBPOnemonth : "GBP 1 / month"
    //   GBPSixmonth : "GBP 5 / 6 months"
    //   GBPYearlymonth : "GBP 8 /12 months"
 
     GBPOnemonth : " 1 month price",
     GBPSixmonth : "6 months price",
     GBPYearlymonth : "12 months price",
 
     SelectMonthly : "Select Monthly",
     SelectSixMonthly : "Select 6 Monthly",
     SelectYearly : "Select 12 Monthly",
     AboutApp : "About",
 
    // licence screen
     Licence : "Licence",
 
    // Chat Screen    
     deleteConfirmationMessage : "Are you sure delete this chat ?",
 
    // Member Chat screen
     AddToGroup : "Add to Group",
     Start_message : "Start a message",
     Search_quick_message : "Search Quick Message",
     Image : "Image",
     notUserConnectedMessage : "Chat users are not connected each others, please connect first to start the conversation.",
     acceptDeclineMEssage : "Do you want to accept this request?",
 
     quickMessageArray :
       // [{ "key": "Can you come out to play?" },
       // { "key": "Woof -Yes" },
       // { "key": "Bark - No" },
       // { "key": "Around this afternoon?" },
       // { "key": "Play tommorrow?" },
       // { "key": "Around this morning? Usual Place?" },
       // { "key": "Leaving now see you there? Already here?" },
       // { "key": "Be there in 10min" },
       // { "key": "Where shall we meet? Having a dog nap?" },]
 
       [
          { "key": "Woof - yes" },
          { "key": "Bark - no" },
          { "key": "I'm going to the park. Want to join?" },
          { "key": "I've arrived where are you?" },
          { "key": "Where shall we meet?" },
          { "key": "Shall we meet up tomorrow?" },
          { "key": "I'll be there in 10 min" },
          { "key": "What time?" },
          { "key": "I'll be there in 20 min" },
       ],
 
    // Member Group Screen 
     MakeANewGroup : "Make a new group",
     Select_deselect_all : "Select/Deselect All",
     upgrade_make_new_group : "Upgrade to make new group",
     atleast_oneCheckBox_Select : "Please select at least one user or group to whom you want to chat",
     Admin : "Admin",
 
    // log out screen
     account : "Account",
 
    /**
     * ----------------------Validation error messages--------------------
     */
     VALID_EMAIL_EMPTY : "Please enter email address.",
     VALID_EMAIL_FORMATE : "Please enter a valid email address.",
     VALID_PASSWORD_EMPTY : "Please enter a password.",
     VALID_KEYNAME_EMPTY : "Please enter key name.",
     VALID_KEYNAME_CHAR_LENGTH : "KeyName must be minimum 2 characters long.",
     VALID_FOB_CODE : "Please enter fob code",
     VALID_NAME_EMPTY : "Please enter name.",
     VALID_PHONE_NUMBER_EMPTY : "Please enter phone number.",
     VALID_PHONE_NUMBER : "Please enter valid phone number.",
     fobDeleteMessage : "Scan the fob again to delete it",
     VALID_DOG_NAME_EMPTY : "Please enter dog name",
     VALID_OWNER_NAME_EMPTY : "Please enter owner name",
     VALID_AGE_EMPTY : "Please enter age",
     VALID_DOB_EMPTY : "Please enter dob",
     VALID_BREED_EMPTY : "Please enter breed",
     VALID_SEX_EMPTY : "Scan the fob again to delete it",
     VALID_INTERESTS_EMPTY : "Please enter interests",
     VALID_IMMUNISATION_EMPTY : "Please enter immunisation",
     VALID_IMAGE_DATA_EMPTY : "Please select at least one profile image",
     VALID_REDEEM_CODE_EMPTY : "Please enter valid Redeem Code",
     VALID_VERIFICATION_CODE : "Please enter verification code.",
     VALID_USER_NAME : "Please enter user name.",
    // google api key
     GOOGLE_API_KEY : 'AIzaSyAGffqwrrLXqBDL_KlvxARlGwhqgU0lo0s',
 
     token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwiX2lkIjoiNWE1ZGY4OTllNWRlMjcwMDE0MGI4ZDY2Iiwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsic29jaWFsX21lZGlhX2xpbmtzIjoiaW5pdCIsImltYWdlcyI6ImluaXQiLCJjcmVhdGVkX2F0IjoiaW5pdCIsImJsb2NrZWRfdXNlciI6ImluaXQiLCJ2ZXJpZmljYXRpb25fY29kZSI6ImluaXQiLCJfX3YiOiJpbml0IiwiZGV2aWNlX3Rva2VuIjoiaW5pdCIsImRldmljZV90eXBlIjoiaW5pdCIsImxvbmdpdHVkZSI6ImluaXQiLCJsYXRpdHVkZSI6ImluaXQiLCJlbWFpbF9pZCI6ImluaXQiLCJwYXNzd29yZCI6ImluaXQiLCJ1c2VyX25hbWUiOiJpbml0IiwiaXNfdmVyaWZpZWRfdXNlciI6ImluaXQiLCJpc19wcm9maWxlX2NvbXBsZXRlIjoiaW5pdCIsImlzX0FjdGl2ZSI6ImluaXQiLCJvd25lcl9uYW1lIjoiaW5pdCIsImFnZSI6ImluaXQiLCJicmVlZCI6ImluaXQiLCJkb2dfbmFtZSI6ImluaXQiLCJjb250YWN0X251bWJlciI6ImluaXQiLCJuYW1lIjoiaW5pdCIsImRlc2NyaXB0aW9uIjoiaW5pdCIsIm5ld0Nvbm5lY3Rpb25BbGVydCI6ImluaXQiLCJpbmNvbW1pbmdNZXNzYWdlcyI6ImluaXQiLCJuZXdBZHZpY2VNaWxlc3RvbmUiOiJpbml0IiwibmV3UGxheU1hdGVGb3VuZCI6ImluaXQiLCJzZWFyY2hEaXN0YW5jZSI6ImluaXQiLCJzZXR0aW5nVW5pdCI6ImluaXQiLCJzdWJzY3JpcHRpb25fdHlwZSI6ImluaXQiLCJfaWQiOiJpbml0In0sInN0YXRlcyI6eyJpZ25vcmUiOnt9LCJkZWZhdWx0Ijp7fSwiaW5pdCI6eyJ2ZXJpZmljYXRpb25fY29kZSI6dHJ1ZSwiX192Ijp0cnVlLCJzb2NpYWxfbWVkaWFfbGlua3MiOnRydWUsImltYWdlcyI6dHJ1ZSwiY3JlYXRlZF9hdCI6dHJ1ZSwiYmxvY2tlZF91c2VyIjp0cnVlLCJkZXZpY2VfdG9rZW4iOnRydWUsImRldmljZV90eXBlIjp0cnVlLCJsb25naXR1ZGUiOnRydWUsImxhdGl0dWRlIjp0cnVlLCJlbWFpbF9pZCI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsInVzZXJfbmFtZSI6dHJ1ZSwiaXNfdmVyaWZpZWRfdXNlciI6dHJ1ZSwiaXNfcHJvZmlsZV9jb21wbGV0ZSI6dHJ1ZSwiaXNfQWN0aXZlIjp0cnVlLCJvd25lcl9uYW1lIjp0cnVlLCJhZ2UiOnRydWUsImJyZWVkIjp0cnVlLCJkb2dfbmFtZSI6dHJ1ZSwiY29udGFjdF9udW1iZXIiOnRydWUsIm5hbWUiOnRydWUsImRlc2NyaXB0aW9uIjp0cnVlLCJuZXdDb25uZWN0aW9uQWxlcnQiOnRydWUsImluY29tbWluZ01lc3NhZ2VzIjp0cnVlLCJuZXdBZHZpY2VNaWxlc3RvbmUiOnRydWUsIm5ld1BsYXlNYXRlRm91bmQiOnRydWUsInNlYXJjaERpc3RhbmNlIjp0cnVlLCJzZXR0aW5nVW5pdCI6dHJ1ZSwic3Vic2NyaXB0aW9uX3R5cGUiOnRydWUsIl9pZCI6dHJ1ZX0sIm1vZGlmeSI6e30sInJlcXVpcmUiOnt9fSwic3RhdGVOYW1lcyI6WyJyZXF1aXJlIiwibW9kaWZ5IiwiaW5pdCIsImRlZmF1bHQiLCJpZ25vcmUiXX0sInBhdGhzVG9TY29wZXMiOnt9LCJlbWl0dGVyIjp7ImRvbWFpbiI6bnVsbCwiX2V2ZW50cyI6e30sIl9ldmVudHNDb3VudCI6MCwiX21heExpc3RlbmVycyI6MH0sIiRvcHRpb25zIjp0cnVlfSwiaXNOZXciOmZhbHNlLCJfZG9jIjp7InNvY2lhbF9tZWRpYV9saW5rcyI6WyIiLCIiXSwiaW1hZ2VzIjpbImh0dHA6Ly9yZXMuY2xvdWRpbmFyeS5jb20vaGFieXlkeGplL2ltYWdlL3VwbG9hZC92MTUxNjEwODIyOS9haWFhdjZ1MnplZmZibXZramRuNC5qcGciXSwiY3JlYXRlZF9hdCI6IjIwMTgtMDEtMTZUMTM6MDU6MjkuNDc2WiIsImJsb2NrZWRfdXNlciI6W10sInZlcmlmaWNhdGlvbl9jb2RlIjoiIiwiX192IjowLCJkZXZpY2VfdG9rZW4iOiIiLCJkZXZpY2VfdHlwZSI6IiIsImxvbmdpdHVkZSI6Ijc1LjQ2NTQ2NDYiLCJsYXRpdHVkZSI6IjI2LjE2NTQ0MTIzIiwiZW1haWxfaWQiOiJzYW5qZWV2ZDFAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkWUFDamUvTmQ4UmhzLjZvQUpjaDV0dU15ZkR2R2dDT09sUUI0MTJLSXplanRaOVg1enAyYlMiLCJ1c2VyX25hbWUiOiJzYW5qZWV2ZDEiLCJpc192ZXJpZmllZF91c2VyIjp0cnVlLCJpc19wcm9maWxlX2NvbXBsZXRlIjpmYWxzZSwiaXNfQWN0aXZlIjp0cnVlLCJvd25lcl9uYW1lIjoic2FuamVldmQxIiwiYWdlIjoiOTgiLCJicmVlZCI6ImQ1ZDUiLCJkb2dfbmFtZSI6ImRkZCIsImNvbnRhY3RfbnVtYmVyIjoiIiwibmFtZSI6bnVsbCwiZGVzY3JpcHRpb24iOiJoc2hzaiIsIm5ld0Nvbm5lY3Rpb25BbGVydCI6dHJ1ZSwiaW5jb21taW5nTWVzc2FnZXMiOnRydWUsIm5ld0FkdmljZU1pbGVzdG9uZSI6dHJ1ZSwibmV3UGxheU1hdGVGb3VuZCI6dHJ1ZSwic2VhcmNoRGlzdGFuY2UiOiIyOSIsInNldHRpbmdVbml0IjoiSW1wZXJpYWwiLCJzdWJzY3JpcHRpb25fdHlwZSI6ImZyZWUiLCJfaWQiOiI1YTVkZjg5OWU1ZGUyNzAwMTQwYjhkNjYifSwiJGluaXQiOnRydWUsImlhdCI6MTUxNzI5MDAyNn0.9Fp8XSvf2ni2tSEM4WBod5uTAC9z17lu2UwjrLJm_kk",
     userID : "5b8793eed095e1004a5680bb",
 
     removeTokenString : "Are you sure you want to logout?",
     enableYourLocation : " WoofLocal App need device location for finding nearby mates, please enable Your Location."
 
 }
 export default Strings