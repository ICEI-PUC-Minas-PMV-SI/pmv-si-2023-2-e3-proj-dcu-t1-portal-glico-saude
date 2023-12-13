function showContent(contentId) {
    // Hide all content sections
    var contentSections = document.getElementsByClassName('content');
    for (var i = 0; i < contentSections.length; i++) {
        contentSections[i].style.display = 'none';
    }

    // Show the selected content section
    var selectedContent = document.getElementById(contentId);
    selectedContent.style.display = 'block';
}