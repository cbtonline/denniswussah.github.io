$(".alert-danger").hide();
$("#account-top").hide();



  // WARNING: shutto
$("#transaction-processing-shutto").hide();
$(".transaction-leave-shutto").hide();
$("#transferCon-btn-shutto").hide();

// WARNING: shutto 2
$("#transaction-processing-shuttoo").hide();
$(".transaction-leave-shuttoo").hide();
$("#transferCon-btn-shuttoo").hide();

// WARNING: EVANS 3RD ACCOUNT
$("#transaction-processing-evanns").hide();
$(".transaction-leave-evanns").hide();
$("#transferCon-btn-evanns").hide();

// WARNING: ross
$("#transaction-processing-ross").hide();
$(".transaction-leave-ross").hide();
$("#transferCon-btn-ross").hide();

// WARNING: evanzz
$("#transaction-processing-evanzz").hide();
$(".transaction-leave-evanzz").hide();
$("#transferCon-btn-evanzz").hide();

  // WARNING: Evans
$("#transaction-processing-evans").hide();
$(".transaction-leave-evans").hide();
$("#transferCon-btn-evans").hide();

// WARNING: Evans-2
$("#transaction-processing-evans-2").hide();
$(".transaction-leave-evans-2").hide();
  // WARNING: Stunna
$("#transaction-processing-stunna").hide();
$(".transaction-leave-stunna").hide();
$("#transferCon-btn-stunna").hide();
// WARNING: ali
$("#transaction-processing-ali").hide();
$(".transaction-leave-ali").hide();
// WARNING: GOLDMAN CROMBIA
$("#transaction-processing-crombiagoldman").hide();
$(".transaction-leave-crombiagoldman").hide();

// WARNING: Dallas
$("#transaction-processing-dallas").hide();
$(".transaction-leave-dallas").hide();
$("#transferCon-btn-dallas").hide();

// WARNING: Dallas
$("#transaction-processing-castyyy").hide();
$(".transaction-leave-castyyy").hide();
$("#transferCon-btn-castyyy").hide();


$("#submitcode-btn").click(
  function(){
    if ($("#code-txt").val() === "0666") {
      alert("You have not activated this service. Visit our Nearest branch");
    } else {
      alert("Failed to open");
    }
  }
);
