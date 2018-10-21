
$(".gd").addClass("activeList");
$(".gdSkill").removeClass( "hide" );
$('.skills').click(function() {

  // $(this).toggleClass("activeList");
  //

  if ( $(this).hasClass( "gd" ) ) {
  $(this).addClass("activeList");
  $(".il").removeClass("activeList");
  $(".ui").removeClass("activeList");
  $(".ga").removeClass("activeList");
  $(".3d").removeClass("activeList");
  $(".gdSkill").removeClass( "hide" );
  $(".ilSkill").addClass( "hide" );
  $(".uiSkill").addClass( "hide" );
  $(".gaSkill").addClass( "hide" );
  $(".3dSkill").addClass( "hide" );
  }

  if ( $(this).hasClass( "il" ) ) {
  $(this).addClass("activeList");
  $(".gd").removeClass("activeList");
  $(".ui").removeClass("activeList");
  $(".ga").removeClass("activeList");
  $(".3d").removeClass("activeList");
  $(".gdSkill").addClass( "hide" );
  $(".ilSkill").removeClass( "hide" );
  $(".uiSkill").addClass( "hide" );
  $(".gaSkill").addClass( "hide" );
  $(".3dSkill").addClass( "hide" );
  }

  if ( $(this).hasClass( "ui" ) ) {
  $(this).addClass("activeList");
  $(".il").removeClass("activeList");
  $(".gd").removeClass("activeList");
  $(".ga").removeClass("activeList");
  $(".3d").removeClass("activeList");
  $(".gdSkill").addClass( "hide" );
  $(".ilSkill").addClass( "hide" );
  $(".uiSkill").removeClass( "hide" );
  $(".gaSkill").addClass( "hide" );
  $(".3dSkill").addClass( "hide" );
  }

  if ( $(this).hasClass( "ga" ) ) {
  $(this).addClass("activeList");
  $(".il").removeClass("activeList");
  $(".ui").removeClass("activeList");
  $(".gd").removeClass("activeList");
  $(".3d").removeClass("activeList");
  $(".gdSkill").addClass( "hide" );
  $(".ilSkill").addClass( "hide" );
  $(".uiSkill").addClass( "hide" );
  $(".gaSkill").removeClass( "hide" );
  $(".3dSkill").addClass( "hide" );
  }

  if ( $(this).hasClass( "3d" ) ) {
  $(this).addClass("activeList");
  $(".il").removeClass("activeList");
  $(".ui").removeClass("activeList");
  $(".ga").removeClass("activeList");
  $(".gd").removeClass("activeList");
  $(".gdSkill").addClass( "hide" );
  $(".ilSkill").addClass( "hide" );
  $(".uiSkill").addClass( "hide" );
  $(".gaSkill").addClass( "hide" );
  $(".3dSkill").removeClass( "hide" );
  }
});
