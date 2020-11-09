$(document).ready(function () {

    $("#left-bar-icon").click(function () {
        $("#left-bar").toggleClass("is-hidden-mobile");
        $("#center-area").toggleClass("is-hidden");
    });

    $("#right-bar-icon").click(function () {
        $("#right-bar").toggleClass("is-hidden-mobile");
        $("#center-area").toggleClass("is-hidden");
    });

    $("#meeting-card-body-button-edit-agenda").click(function () {
        $("#meeting-card-body-agenda").toggleClass("is-hidden");
        $("#meeting-card-body-agenda-edit").toggleClass("is-hidden");
        $("#meeting-card-body-button-edit-agenda").prop('disabled', true);
        $("#meeting-card-body-button-take-notes").prop('disabled', true);
        $("#meeting-card-body-button-more-actions").prop('disabled', true);
    });

    $("#meeting-card-body-button-take-notes").click(function () {
        $("#meeting-card-body-agenda").toggleClass("is-hidden");
        $("#meeting-card-body-notes").toggleClass("is-hidden");
        $("#meeting-card-body-button-edit-agenda").prop('disabled', true);
        $("#meeting-card-body-button-take-notes").prop('disabled', true);
        $("#meeting-card-body-button-more-actions").prop('disabled', true);
    });

    $("#meeting-card-body-agenda-edit-button-save").click(function () {
        $("#meeting-card-body-agenda").toggleClass("is-hidden");
        $("#meeting-card-body-agenda-edit").toggleClass("is-hidden");
        $("#meeting-card-body-button-take-notes").prop('disabled', false);
        $("#meeting-card-body-button-more-actions").prop('disabled', false);
        $("#meeting-card-body-button-edit-agenda").prop('disabled', false);
    });

    $("#meeting-card-body-notes-button-save").click(function () {
        $("#meeting-card-body-agenda").toggleClass("is-hidden");
        $("#meeting-card-body-notes").toggleClass("is-hidden");
        $("#meeting-card-body-button-take-notes").prop('disabled', false);
        $("#meeting-card-body-button-more-actions").prop('disabled', false);
        $("#meeting-card-body-button-edit-agenda").prop('disabled', false);
    });

    $("#1-1-notebook-panel-angle").click(function () {

        $("#1-1-notebook-panel .panel-block").toggleClass("is-hidden");
        $("#1-1-notebook-panel-angle-icon").toggleClass("fa-flip-vertical");
    });

    $("#action-items-panel-angle").click(function () {

        $("#action-items-panel .panel-block").toggleClass("is-hidden");
        $("#action-items-panel-angle-icon").toggleClass("fa-flip-vertical");
    });

    $("#logged-items-panel-angle").click(function () {

        $("#logged-items-panel .panel-block").toggleClass("is-hidden");
        $("#logged-items-panel-angle-icon").toggleClass("fa-flip-vertical");
    });

    $("#meeting-card-header-angle").click(function () {

        $("#meeting-card-body").toggleClass("is-hidden");
        $("#meeting-card-header-angle").toggleClass("fa-flip-vertical");
    });
});