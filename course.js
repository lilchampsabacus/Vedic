function showChapter(chapterId) {
    // 1. Hide all chapter contents
    const allChapters = document.querySelectorAll('.chapter-content');
    allChapters.forEach(chapter => {
        chapter.classList.remove('active-content');
    });

    // 2. Remove 'active' styling from all sidebar list items
    const allListItems = document.querySelectorAll('.chapter-list li');
    allListItems.forEach(item => {
        item.classList.remove('active');
    });

    // 3. Show the selected chapter content
    const selectedChapter = document.getElementById(chapterId);
    if (selectedChapter) {
        selectedChapter.classList.add('active-content');
    }

    // 4. Highlight the clicked sidebar item
    // 'event.currentTarget' targets the exact <li> that was clicked
    event.currentTarget.classList.add('active');
    
    // 5. Scroll back to the top of the reading area
    document.querySelector('.content-area').scrollTo(0, 0);
}
