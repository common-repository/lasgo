	
var lasgo_points_arr = lasgo_points_option.split('|');
function getWelcome(){
	var url = document.URL;  var welcome='none'; var more='none';
	if(url.match(/update-core.php/g)=='update-core.php'){ welcome= 'Updating WordPress is easy now, just follow the instructions. Do not forget to backup your database and files, before you upgrade.'; more ='<p>Before you jump ahead and update your WordPress, take a moment to think about our theme and plugins, do we know for sure that everything will go smoothly?</p><p>Many plugins and themes need time to update their code to the latest WordPress rules and this can create a problem when you update WordPress.</p><p>Not to worry, updating is not difficult at all, just follow these steps:</p><p>1. Backup your files and database you can do this manually or with a plugin. You do not want to be bothered with all that server stuff? NO PROBLEM. Download and run the <a href="http://wordpress.org/plugins/backupwordpress/"  target="_blank">BackUpWordPress plugin</a>. You can also do this manually on your server, by following this <a href="http://codex.wordpress.org/WordPress_Backups"  target="_blank">tutorial</a>.</p><p>2. Deactivate all plugins and your theme. You can check for updates for your current plugins and themes.</p><p>3. Great job so far! You have what is most important - a backup so that you can easily return to the previous version. Now click the Update WordPress button and enjoy the new version. To install it manually follow these <a href="http://codex.wordpress.org/Updating_WordPress#Manual_Update" target="_blank">tips</a>.</p><p><a href="https://www.youtube.com/results?search_query=how+to+upgrade+wordpress+tutorial&oq=how+to+upgrade+wordpress+tutorial&gs_l=youtube.3...19511.20290.0.20807.5.5.0.0.0.0.203.571.1j3j1.5.0...0.0...1ac.1.11.youtube.kAr2tK67m7s" target="_blank"><i class="icon-youtube "></i>Watch Youtube Tutorials</a></p><h3>Troubleshooting</h3><p>If you experience problems after the upgrade, you can always restore your backup and replace the files with ones from your previous version.</p><p></p><p>Want to keep the new version but remove the PHP errors you get? </p><p>Look in the code, if the error comes from some plugin, or the theme, then try deleting the theme or plugin through your FTP client. You probably forgot to deactivate all plugins. Backup again, and then delete your plugins. You should find them in the wp-content/plugins/ folder. If the error comes from a theme, then delete all your non-twenty-something themes (after you backup).</p><p>You did not make a backup of your files and now the browser shows an error?</p><p>First rule, DO NOT PANIC, try to fix the problem. Everything will work out just fine. If you already deleted all your plugins and your custom theme, and you still get an error, then maybe you (or the server) failed to copy all files. This time make a backup then try to copy the new WordPress files again.</p><p>Read this for more information <a href="http://codex.wordpress.org/Upgrading_WordPress_Extended" target="_blank">Upgrade WordPress</a>.</p><h3>Restore Database</h3><p>First check if you have the backup file. The file name should end with .sql or something similar.</p><p>First backup and then empty your existing database, log in to your cPanel account (Your web host may have some other solution), scroll down to databases section and then click on phpMyAdmin. This will open phpMyAdmin in a new browser tab. Click on your database, and select all tables. From the drop down to your right, click drop selected tables.</p><p>Now you can import the SQL file.</p>'; }
	if(url.match(/edit.php/g)=='edit.php'){welcome= 'Posts are the primary content of your blog and where you go to add new content. Post content is sorted by date and category by default.'; more ='<p><strong>All posts</strong> display your latest posts. You can filter the posts displayed using several methods. The first method is using the links at the top of the screen. Your published posts are already public, and probably displayed in some part of your website.</p><p>You can also use a search to find a specific post. The final filtering method is to use the date and category dropdown boxes and then click on the Filter button.</p><h3>Deleting Posts</h3><p>There are a couple of ways to remove posts from the Posts screen. If you want to trash multiple posts at once, you can check the boxes to the left of each post, select Move to Trash from the Bulk Actions dropdown, and click Apply. If you only want to trash one post, place your cursor over the post, and a few action links will appear under the title of the post. Click the Trash link.</p><p>To restore a post that you have trashed, view your trash by selecting the Trash link near the top of the page. Hover over the title of the post you want to restore and click Restore. This will move the page back to your Posts menu. You can restore multiple posts at once using the Bulk Actions dropdown.</p><p>To permanently delete a post, view your trash by selecting the Trash link near the top of the post. Hover over the title of the post and click Delete Permanently. To permanently delete all your trashed posts, go to your trash and click Empty Trash.</p><h3>Quick Edit</h3><p>The Quick Edit option will appear below a post title when you hover over the title. Quick Edit lets you modify the post details such as title, slug, date, author, password, privacy, categories, tags, comments, status, and sticky.</p><h3>Bulk Edit</h3><p>Using the Bulk Actions drop-down menu at the top of the Edit Posts list, you can bulk edit several posts at a time. To do that, select several posts from the list using the checkboxes on the left. Then select Edit from the Bulk Actions drop-down menu and click the Apply button. You will see options that can be applied to all of the selected posts.</p><h3>Excerpt View</h3><p>You can show an excerpt of each post in the list by using Excerpt View button above the list. When you make the change, a post row will now show some of the content from the post.</p><h3>View all posts</h3><p>If you want to view all posts you have made, or increase/decrease the number of posts displayed, select Screen Options in the top right of the screen. Select a higher/lower number displayed and click Apply. You can also show/hide the columns displayed on the Edit Posts Screen. </p>'; }
	if(url.match(/post-new.php/g)=='post-new.php'){ currentLearnMore=4; welcome= 'The visual editor provides a semi-WYSIWYG (What You See is What You Get) content editor that allows you to easily create, edit, and format your blog content in a view similar to that of a word processor.'; more ='<h2>Visual Editor</h2><p>The visual editor provides a semi-WYSIWYG (What You See is What You Get) content editor that allows you to easily create, edit, and format your blog content in a view similar to that of a word processor. You can select the Visual tab in the top right corner of the editor area.</p><p>There are at least two rows of editing icons contained within the visual editor. You can find out what any icon means or does by hovering over it with your mouse a small tooltip will appear describing the icon and its purpose.</p><p><strong>To display the second row of icons, select the kitchen sink icon (the last icon in the first row).</strong> You can see here another set of tools like underline, text color, headings or custom character. The full alignment can only be applied to text and will align both sides of the text.</p><h3>Styles</h3><p>The style drop-down menu allows you to change the formatting of any selected text. This includes various headings and other pre-defined styles built into your theme. </p><h3>Text Color</h3><p>Clicking on the down arrow next to the text color button will display a color selector. Selecting a color will apply that color to the selected text and make it the default color for the color button. Clicking on the text color button itself will apply the last default color.</p><h3>Pasting Text</h3><p>If you copy and paste text from somewhere else, you may discover that it does not always appear exactly as you would expect. If you use the Paste as text button then a special cleanup process will run to remove any special formatting and HTML tags that may otherwise change your text. Once clicked, a window appears where you can enter your text:</p><p>Checking the keep linebreaks box will preserve all HTML break tags. Unchecking this option will remove them.</p><h3>Remove Formatting</h3><p>The remove formatting button, as you would expect, removes all formatting (bold, italic, colors etc) from a highlighted section of text. First select your text, then click the button.</p><h3>Custom Characters</h3><p>As well as the normal letters available directly from your keyboard, you can also insert special characters. Position your cursor to where you want to insert a character and click on the insert custom character button. A popup window will appear. Click any character and it will be inserted at your cursor position.</p><h3>Outdent / Indent</h3><p>The indent button will move text in by one level, and the outdent button will take away one level.</p><h3>Spacing</h3><p>Hitting the Enter (Return) key will end the paragraph you are writing and start a new one. If you want to start a new line without creating a new paragraph, press the Shift key while hitting Enter.</p><h3>Keyboard Shortcuts</h3><p>The visual editor has several keyboard shortcuts, or hotkeys, built in. To see a list of all of the available shortcuts, click the Help icon and then the Hotkeys tab.</p><h2>Other Elements</h2><h3>Publish</h3><p>The publish module includes your Post Status, Post Visibility, and when your post was published. The Post Status shows whether a post is published or unpublished.</p><p>Published (The post has been published on your blog for all to see), Scheduled (when the post timestamp is set in the future for automatic publishing), Pending Review (the post has been submitted by a Contributor and it must be published by an Editor or Administrator before it is visible to blog readers), Draft (an unpublished post - will not be visible to readers until the post is published). You can learn more about changing your Post Visibility, including password protecting a post, here.</p><h3>Post Title and Permalink URL</h3><p>The Title and URL of a post are related by default. When you initially type the title of your post, the post slug (used in the permalink/URL) is automatically created. The post slug is the part of the URL after the date in a post URL. When the default post slug is created, all letters will be converted to lowercase, spaces will be exchanged with dashes, and any special characters will be removed.</p><p>You can modify the post slug by clicking the Edit button next to it. When you are finished editing, click OK. After you are done making your changes do not forget to click the Update button to update the post and save these changes. This is especially handy if, for example, your page title is very long, but you would like a URL that people can remember more easily.</p><p>If your language uses a non-western character set, long post titles can break post slugs. To fix that, shorten the post slug to a single word.</p><h3>Tags and Categories</h3><p>Tags and categories allow you to group your posts together.</p><h3>Discussion</h3><p>The Discussion module is used to turn the discussion options on/off for the post. If you want to set the defaults for these checkboxes, you can do so in the Discussion Settings of the blog. If you are editing a previously published post, the Discussion module would also show any comments for the post. Trackbacks are a way of letting other bloggers know when you have linked to their site.</p><h3>Post Author</h3><p>The Author module is used to change the author of a post. To change an author, use the dropdown menu to select the new author and click Update or Publish to save the changes.</p><h3>Excerpt</h3><p>Excerpt is the summary of your post. This is the part that is normally displayed on your home page, archive page, or category/tag page. If you want you can change it here.</p><h3>Troubleshooting</h3><p>If you are missing one of the modules listed above on your New Post or Edit Post page, you may need to enable it in your Screen Options settings.</p><p>Look at the top right corner, select the Screen Options button, and then check the modules you want.</p>'; }
	if(url.match(/edit-tags.php/g)=='edit-tags.php' && url.match(/taxonomy=category/g)=='taxonomy=category'){ currentLearnMore=2; welcome= 'Before you begin writing, you may want to take some time to setup some categories for your blog. Write a slug in lowercase for each category and click Add New Category.'; more ='<p>Categories provide a helpful way to group related posts together, and to quickly tell readers what a post is about. Categories also make it easier for people to find your content. Categories are similar to, but broader than, tags. </p><p>Depending on the theme and widgets you have activated, categories can be displayed at the top or bottom of posts, on the individual post view, and/or in the sidebar. You can assign multiple categories per post (you must assign at least one), and categories can be organized hierarchically.</p><h3>Categories Page</h3><p>You can add a new category by filling out the fields Category name (the name of your category), Category parent (if you want to nest a category within a category, select the parent category, otherwise leave at none) and Description (describe what the category is for, this description will appear as a tooltip if you use the category widget).</p><h3>Managing Categories</h3><p>The Posts -> Categories page in your dashboard displays all your categories and shows the name, description, and number of posts belonging to each category. If you move your mouse over a category a set of options will appear, allowing you to edit, quick-edit, or delete that category.</p><h3>Edit Category</h3><p>If you click on Quick Edit the category will change into an edit box and you can rename the category quickly. If you click on Edit you will taken to a separate page where you can edit the name, parent, and description. This functions exactly the same as adding a category.</p><p>Clicking on Delete will delete that category. When a category is deleted, all posts that were only in that category will be assigned to the default category. If a post was also in other categories it will remain untouched.</p><h3>Bulk Actions</h3><p>If you have a lot of categories that you want to delete, then you can use the bulk actions feature. Select each category you want to delete using the checkbox to the left of the category name.</p><h3>Delete Checkbox</h3><p>If you want to select all categories, click the checkbox at the top Check All. Once you have selected the categories you want to delete select Delete from the Bulk Actions menu, and then click Apply. The categories will be deleted. When a category is deleted, all posts that were only in that category will be assigned to the default category. If a post was also in other categories it will remain untouched.</p><h3>Delete Uncategorized</h3><p>A default category (uncategorized) will be assigned to published posts when you start. First create a new category and then change the default category. The default category can be changed under Settings -> Writing in your dashboard.</p><p>Than you can go back and delete uncategorized.</p><h3>Converting Categories to Tags</h3><p>If you change your mind about using categories and instead want to convert them to tags, you can do so using the category to tag converter. At the bottom of the manage categories screen is a link to the category to tag converter.</p><p>Clicking this will take you to a screen where you can select which categories to convert to tags. Make your selection, click on Convert Categories to Tags.</p><p>Your categories will be removed and tags will be assigned to the posts that used to be in those categories. If you want to convert your tags back to categories, please check out converting tags to categories.</p>'; }
	if(url.match(/edit-tags.php/g)=='edit-tags.php' && url.match(/taxonomy=post_tag/g)=='taxonomy=post_tag'){currentLearnMore= 3;welcome= 'Tags are easier to enter when you create your post, just take out couple of important terms in the text.'; more ='<p>Tags provide a useful way to group related posts together and to quickly tell readers what a post is about. Tags also make it easier for people to find your content. Tags are similar to, but more specific than, categories. The use of tags is completely optional.</p><p>Depending on the theme and widgets you have activated, tags can be displayed at the top or bottom of posts, on the individual post view, and/or in the sidebar. You can assign multiple tags per post.</p><p>You can see a list of your existing tags and a method of adding new tags. You can add a new tag by filling out the fields Tag name (the name of your tag) and Description (describes what the tag is for, may be displayed in certain themes as, for example, a tooltip)</p><h3>Managing Tags</h3><p>The Posts -> Tags page in your dashboard shows a list of tags you have used, as well as the name and number of posts belonging to each tag. If you move your mouse over a tag a set of options will appear allowing you to edit, quick edit, or delete that tag.</p><p>If you click on Quick Edit the tag will change into an edit box and you can rename the tag quickly.</p><p>If you click on Edit you will be taken to a separate page where you can edit the name and description. This functions exactly the same as in adding a tag. Clicking on Delete will delete that tag.</p><h3>Bulk Actions</h3><p>If you have a lot of tags that you want to delete, you can use the bulk actions feature. Select each tag you want to delete using the checkbox to the left of the tag name. If you want to select all tags click the checkbox at the top.</p><p>From the bulk actions menu select Delete and then click Apply. The tags will be deleted.</p><h3>Converting Tags to Categories</h3><p>If you change your mind about using tags and instead want to convert them to categories, you can do so using the tag to category converter. At the bottom of the manage tags screen is a link to the tag to category converter.</p><p>Clicking this will take you to a screen where you can select which tags to convert to categories. Make your selection, click on convert tags to categories.</p><p>Your tags will be removed and categories will be assigned to the posts that used to be in those tags.</p>'; }
	if(url.match(/post.php/g)=='post.php'  && url.match(/action=edit/g)=='action=edit'){ welcome= 'The visual editor provides a semi-WYSIWYG (What You See is What You Get) content editor that allows you to easily create, edit, and format your blog content in a view similar to that of a word processor.'; more ='<h2>Visual Editor</h2><p>The visual editor provides a semi-WYSIWYG (What You See is What You Get) content editor that allows you to easily create, edit, and format your blog content in a view similar to that of a word processor. You can select the Visual tab in the top right corner of the editor area.</p><p>There are at least two rows of editing icons contained within the visual editor. You can find out what any icon means or does by hovering over it with your mouse, a small tooltip will appear describing the icon and its purpose.</p><p><strong>To display the second row of icons, select the kitchen sink icon (the last icon in the first row).</strong> You can see here another set of tools like underline, text color, headings or custom character. The full alignment can only be applied to text and will align both sides of the text.</p><h3>Styles</h3><p>The style drop-down menu allows you to change the formatting of any selected text. This includes various headings and other pre-defined styles built into your theme. </p><h3>Text Color</h3><p>Clicking on the down arrow next to the text color button will display a color selector. Selecting a color will apply that color to the selected text and make it the default color for the color button. Clicking on the text color button itself will apply the last default color.</p><h3>Pasting Text</h3><p>If you copy and paste text from somewhere else, you may discover that it does not always appear exactly as you would expect. If you use the Paste as text button then a special cleanup process will run to remove any special formatting and HTML tags that may otherwise change your text. Once clicked, a window appears where you can enter your text:</p><p>Checking the keep linebreaks box will preserve all HTML break tags. Unchecking this option will remove them.</p><h3>Remove Formatting</h3><p>The remove formatting button, as you would expect, removes all formatting (bold, italic, colors etc) from a highlighted section of text. First select your text, then click the button.</p><h3>Custom Characters</h3><p>As well as the normal letters available directly from your keyboard, you can also insert special characters. Position your cursor to where you want to insert a character and click on the insert custom character button. A popup window will appear. Click any character and it will be inserted at your cursor position.</p><h3>Outdent / Indent</h3><p>The indent button will move text in by one level, and the outdent button will take away one level.</p><h3>Spacing</h3><p>Hitting the Enter (Return) key will end the paragraph you are writing and start a new one. If you want to start a new line without creating a new paragraph, press the Shift key while hitting Enter.</p><h3>Keyboard Shortcuts</h3><p>The visual editor has several keyboard shortcuts, or hotkeys, built in. To see a list of all of the available shortcuts, click the Help icon and then the Hotkeys tab.</p><h2>Other Elements</h2><h3>Publish</h3><p>The publish module includes your Post Status, Post Visibility, and when your post was published. The Post Status shows whether a post is published or unpublished.</p><p>Published (The post has been published on your blog for all to see), Scheduled (when the post timestamp is set in the future for automatic publishing), Pending Review (the post has been submitted by a Contributor and it must be published by an Editor or Administrator before it is visible to blog readers), Draft (an unpublished post - will not be visible to readers until the post is published). You can learn more about changing your Post Visibility, including password protecting a post, here.</p><h3>Post Title and Permalink URL</h3><p>The Title and URL of a post are related by default. When you initially type the title of your post, the post slug (used in the permalink/URL) is automatically created. The post slug is the part of the URL after the date in a post URL. When the default post slug is created, all letters will be converted to lowercase, spaces will be exchanged with dashes, and any special characters will be removed.</p><p>You can modify the post slug by clicking the Edit button next to it. When you are finished editing, click OK. After you are done making your changes do not forget to click the Update button to update the post and save these changes. This is especially handy if, for example, your page title is very long, but you would like a URL that people can remember more easily.</p><p>If your language uses a non-western character set, long post titles can break post slugs. To fix that, shorten the post slug to a single word.</p><h3>Tags and Categories</h3><p>Tags and categories allow you to group your posts together.</p><h3>Discussion</h3><p>The Discussion module is used to turn the discussion options on/off for the post. If you want to set the defaults for these checkboxes, you can do so in the Discussion Settings of the blog. If you are editing a previously published post, the Discussion module would also show any comments for the post. Trackbacks are a way of letting other bloggers know when you have linked to their site.</p><h3>Post Author</h3><p>The Author module is used to change the author of a post. To change an author, use the dropdown menu to select the new author and click Update or Publish to save the changes.</p><h3>Excerpt</h3><p>Excerpt is the summary of your post. This is the part that is normally displayed on your home page, archive page, or category/tag page. If you want you can change it here.</p><h3>Troubleshooting</h3><p>If you are missing one of the modules listed above on your New Post or Edit Post page, you may need to enable it in your Screen Options settings.</p><p>Look at the top right corner, select the Screen Options button, and then check the modules you want.</p>'; }
	if(url.match(/upload.php/g)=='upload.php'){welcome= 'You can see your images listed here, organized by date, parent post or something else.'; more ='<p>The Media menu can be used to manage your existing media files, such as images, audio, videos, and documents.</p><p>As with other dashboard pages, you can use the Screen Options in the upper right to configure which columns are shown in the table.</p><h3>Actions</h3><p>Actions describe the process to be performed on particular Media. There are two styles of Actions that will be referred to as Bulk Actions and Immediate Actions.</p><p>Bulk Actions to do something to more Media files at one time, if those Media have been previously selected. Bulk Actions are available, when appropriate, as choices in the Bulk Actions pulldown box, above the Table. The only Bulk Action allowed is Delete.</p><p>Immediate Actions are performed immediately, on an individual Media. Hovering the mouse cursor over the Media row reveals the Edit, Delete, and View options under the Name column, in that Media row. Clicking on a Media Name will also initiate the Edit Action. </p><p>Edit is Immediate Action that displays the Edit Media Screen. This Action can be initiated by click on the Media Name or clicking on the Edit option just below the Media Name.</p><p>Delete Permanently deletes the Media. Delete is available both as a Bulk Action, and an Immediate Action.</p><p>View presents the Media in a simulated view of how the image would look when displayed in your Theme. View is available only as an Immediate Action.</p><p>Attach link (if unattached) to attach the media to a post/Page. If clicked, the Find Posts or Pages dialogue box will appear. Search posts or Pages by keyword. Select the post/Page one wants to attach the media. Click the Select button.</p>'; }
	if(url.match(/media-new.php/g)=='media-new.php'){welcome= 'Just drag some image from a folder and drop it in this box. After that you can crop, scale or copy the URL by clicking on Edit.'; more ='<p>Uploading media from your local computer into the Media Library is quite simple. Two uploader methods, Multi-File Uploader and Browser Uploader, are provided. The Multi-File Uploader is the primary method for adding media to the Media Library, but if does not work then click the Browser Uploader link to use the Browser Uploader.</p><h3>Media Add New Screen</h3><p>You will also see a message displayed at the bottom of your view that indicates maximum upload size for files, as set by your hosting provider.</p><h3>Multi-File Uploader</h3><p>If you are using a web browser that supports HTML5 then you will see an active upload area (indicated by a dashed border) where you can drag-and-drop files from your computer to this area to upload them to the Media Library. You can upload files one at a time, or you can add multiple media items by dragging and dropping a group of files in this area.</p><p>If drag-and-drop is not working for you, click on the Select Files button, which will launch a file browser that allows you to find and select (by clicking) the files you want to upload. Multiple files can be also be selected by holding down the Ctrl key (Cmd key on a Mac) and clicking on each file you wish to upload. After all the files are seleted, click on the Open button to begin uploading. </p><p>As your files are uploaded, a status bar will be displayed next to each one to indicate progress, and when the uploading is complete, a thumbnail of the media is displayed. Once your upload is complete, you may click on the Edit link to edit and save the information about that media files (see the Edit Media page for more information) if you wish.</p><h3>Browser Uploader</h3><p>Click the Browse button, and then from the File Upload window, find and click the file to upload, then click the Open button. The Media file name will be placed in the text box to the left of the Browse button.</p><p>Once a Media file name is displayed in the text box to the left of the Browse button, click the Upload button to upload that Media. At that point the Media Library Screen is displayed.</p><p>If the Upload is not working or is taking a prolonged period of time, click the Cancel button to cancel the Upload process. </p><p><h2>Image Editor</h2></p><h3>Cropping</h3><p>You can remove any unwanted portion of an image you have uploaded to your media library by using our cropping feature. First, click and drag with your mouse to select the portion of the image you want to keep. Once you are happy with the selection, click on the Crop button. You will then have your new image.</p><p>If happy with the result, click Save. If unhappy, click Cancel. Note that you must click Save for the crop to finalize.</p><h3>Rotating</h3><p>You can rotate (clockwise or counter-clockwise) any image in your media library using the appropriate icons above the image in its editing screen. Be sure to click Save in order to finalize the image rotation. If you are unhappy with the result, click the Cancel button.</p><h3>Flipping</h3><p>You can flip (vertically or horizontally) any image in your media library using the appropriate icons above the image in its editing screen. Be sure to click Save in order to finalize the image rotation. If you are unhappy with the result, click the Cancel button.</p><h3>Resizing</h3><p>You can proportionally scale any original image in your Media Library. For best results the scaling should be done before performing any other operations on it (crop, rotate, etc.). Note that if you make the image larger it may become fuzzy.</p><p>Click on the Scale Image link to reveal the editing fields.</p><p>If you then change the width (first field), you will notice that the height (second field) will adjust automatically and proportionally.  Once finished, click Scale to finalize the action.</p><h3>Undo and Redo</h3><p>Similar to an image editing program found on your desktop, you also have the ability to undo and redo edits you have made on an image. These icons are illustrated below.</p><h3>Reverting</h3><p>It is always a good idea to maintain a copy of any images on your computer, but you do have the ability to revert any previous edits made to the image and restore the original image that you uploaded initially to your media library.</p><p>When you open an image in editing mode (one to which you have previously made edits), you will see a Restore Original Image link.</p><p>If you are sure you would like to restore the image, click on the Restore image button. The image should then revert back to its original form, and you will receive a message that the restoration was successful.</p>'; }
	if(url.match(/edit.php/g)=='edit.php'  && url.match(/post_type=page/g)=='post_type=page'){welcome= 'Pages are for timeless content that you want to display indefinitely. You can also edit more than one page, by using the Bulk section.'; more ='<p>The Pages Screen provides the facility to manage all the Pages in a blog. Via this Screen, Pages can be edited, deleted, and viewed. Filtering, and searching, also makes it easy to quickly find Pages matching certain criteria.</p><p>Several powerful features allow Pages to be edited in bulk (en masse) allowing fields such as Author, Parent, Template, Comments Allowed, Status, and Pings Allowed, to be changed for a whole batch of Pages. In addition, a Quick Edit feature provides an easy method to change a mulitiude of values, such as Title, Slug, Date, and Author, for a given Page.</p><h3>Pages Screen</h3><p>A table lists all of your Pages, by row. The Pages are listed with the newest Page first. The checkbox when clicked selects  that particular Page to be processed by a Bulk Action. The Page Title displayed as a link. Click the Title link to allow this Page to be edited in the Pages Screen. Next to the Title, if a Page is of a Draft, Pending, or Password Protected nature, text will display showing that.</p><p>The Author is displayed in the form of a link, this is the author who wrote the Page. Clicking the author link causes all the Pages authored by that user to be displayed in the Table of Pages (thus allowing a Bulk Action to be applied to all Pages for a given author).</p><p>A comment bubble is the column heading, and each Page row has comment bubble with the number of comments for that Page. If a Pages has any comments, then the number comments is displayed in a blue bubble. Clicking on a blue comment bubble causes the Comments Screen to be displayed to allow moderation of those comments.</p><p>The Date column for each Page shows the Date Published for Published Pages and the Date Last Modified for other Pages. </p><h3>Sortable Columns</h3><p>Some column headings, such as the Title, Author, and Date, can be clicked to sort the Table of Pages in ascending or descending order. Hover over the column title, for example Title, to see the up-arrow or down-arrow. Click the heading to change the sort order.</p><h3>Page Navigation</h3><p>Under the Screen Options, the number of Pages displayed per page is determined. If more then one page of Pages is available, two double arrow boxes to move to the first and last page are provided. Also two single-arrow boxes are displayed to move one page backward or forward. Finally, a box showing the current page number can be used to enter a page to directly display.</p><h3>Screen Options</h3><p>The Screen Options allow you to choose which columns are displayed, or not displayed, in the underlying Table. Clicking on the Screen Options tab shows a list of the columns with a check-box next to each column. Check the box for each column you want displayed in the Table, or uncheck the box to not display that column. In addition, the number of Pages per page can be set. Click the Screen Options tab again to close the Screen Options.</p><h3>Search</h3><p>Above the Table, to the right, is a search box where you can enter a word, or series of words, and click the Search Pages button to search and display all the Pages meeting your search words.</p><h3>Filtering Options</h3><p>At the top of this Screen are links such as All, Published, Pending Review, Draft, Private, that when clicked, will cause just the Pages of that type to be displayed in the underlying Table.</p><p>Below that, and to the right of the Bulk Actions Apply button, are one other filter option to Show all dates. This dropdown allows you to select, by date, which Pages are displayed in the Table of Pages. By default, Show all dates is selected and all of your Posts are displayed. Clicking Filter applies the settings you select in the dropdowns. </p><h3>Using Selection, Actions, and Apply</h3><p>For Bulk Actions to be performed on multiple Pages at once, those Pages must be first selected with some method.</p><p>Select one Page at a time method by clicking the checkbox to the left of the Page entry. It is possible to keep selecting more Pages by checking their respective checkbox.</p><p>Select all Pages in given Table method can be selected by checking the checkbox in the Table title, or footer bar. Of course, unchecking the header or footer title bar checkbox will cause all entries in that Table to be unchecked (NOT selected).</p><p>Reverse Selection method means checked items become unchecked, and unchecked items become checked. A Reverse Selection is accomplished by holding the Shift key on the keyboard and clicking the header or footer title bar checkbox. </p><p>Actions describe the process to be performed on particular Pages. There are two styles of Actions that will be referred to as Bulk Actions and Immediate Actions. </p><p>The available Actions are Edit, Quick Edit, Delete and View. Edit can be either an Immediate Action or a Bulk Action. The Immediate Action, initiated by click on the Title or clicking on the Edit option just below the Title, causes the Edit Pages screen to display. Edit is also available as a Bulk Action for the selected Pages, so see the Bulk Edit section for details on the Bulk Editing process.</p><p>Quick Edit is an Immediate Action that allows a quick in-line edit of certain fields related to a Page. See the Quick Edit section for details on this Action.</p><p>Delete deletes the Pages. Delete is available both as a Bulk Action, and an Immediate Action.</p><p>View presents the Page as it appears in a single Page view on your blog. View is available only as an Immediate Action. </p><h3>Bulk Edit</h3><p>The Bulk Edit Pages screen is displayed below the Table Of Pages header once, one, or more, Pages have been selected, and the Bulk Action of Edit is Applied. Bulk Edit allows the fields Author, Parent, Template, Comments Allowed, Status, and Pings Allowed, to be changed for all the selected Pages.</p><p>Click Cancel to cancel and abort the Bulk Edit of these Pages. Click Update Page to save the Bulk Edits made to these Pages. </p><h3>Quick Edit</h3><p>Quick Edit is an Immediate Action performed on one Page by clicking the Quick Edit link under the Page Title in the Table of Pages. Quick Edit is just an inline edit that allows you to change the following items Title, Slug, Date, Author, Password or Private page box, Parent, Order, Template, Allow Comments, Allow Pings, Status.</p>'; }
	if(url.match(/post-new.php/g)=='post-new.php' && url.match(/post_type=page/g)=='post_type=page'){ currentLearnMore=1; welcome= 'The visual editor provides a semi-WYSIWYG (What You See is What You Get) content editor that allows you to easily create, edit, and format your blog content in a view similar to that of a word processor.'; more ='<h2>Visual Editor</h2><p>The visual editor provides a semi-WYSIWYG (What You See is What You Get) content editor that allows you to easily create, edit, and format your blog content in a view similar to that of a word processor. You can select the Visual tab in the top right corner of the editor area.</p><p>There are at least two rows of editing icons contained within the visual editor. You can find out what any icon means or does by hovering over it with your mouse, a small tooltip will appear describing the icon and its purpose.</p><p><strong>To display the second row of icons, select the kitchen sink icon (the last icon in the first row).</strong> You can see here another set of tools like underline, text color, headings or custom character. The full alignment can only be applied to text and will align both sides of the text.</p><h3>Styles</h3><p>The style drop-down menu allows you to change the formatting of any selected text. This includes various headings and other pre-defined styles built into your theme. </p><h3>Text Color</h3><p>Clicking on the down arrow next to the text color button will display a color selector. Selecting a color will apply that color to the selected text and make it the default color for the color button. Clicking on the text color button itself will apply the last default color.</p><h3>Pasting Text</h3><p>If you copy and paste text from somewhere else, you may discover that it does not always appear exactly as you would expect. If you use the Paste as text button then a special cleanup process will run to remove any special formatting and HTML tags that may otherwise change your text. Once clicked, a window appears where you can enter your text:</p><p>Checking the keep linebreaks box will preserve all HTML break tags. Unchecking this option will remove them.</p><h3>Remove Formatting</h3><p>The remove formatting button, as you would expect, removes all formatting (bold, italic, colors etc) from a highlighted section of text. First select your text, then click the button.</p><h3>Custom Characters</h3><p>As well as the normal letters available directly from your keyboard, you can also insert special characters. Position your cursor to where you want to insert a character and click on the insert custom character button. A popup window will appear. Click any character and it will be inserted at your cursor position.</p><h3>Outdent / Indent</h3><p>The indent button will move text in by one level, and the outdent button will take away one level.</p><h3>Spacing</h3><p>Hitting the Enter (Return) key will end the paragraph you are writing and start a new one. If you want to start a new line without creating a new paragraph, press the Shift key while hitting Enter.</p><h3>Keyboard Shortcuts</h3><p>The visual editor has several keyboard shortcuts, or hotkeys, built in. To see a list of all of the available shortcuts, click the Help icon and then the Hotkeys tab.</p><h2>Other Elements</h2><h3>Publish</h3><p>The publish module includes your Post Status, Post Visibility, and when your post was published. The Post Status shows whether a post is published or unpublished.</p><p>Published (The post has been published on your blog for all to see), Scheduled (when the post timestamp is set in the future for automatic publishing), Pending Review (the post has been submitted by a Contributor and it must be published by an Editor or Administrator before it is visible to blog readers), Draft (an unpublished post - will not be visible to readers until the post is published). You can learn more about changing your Post Visibility, including password protecting a post, here.</p><h3>Post Title and Permalink URL</h3><p>The Title and URL of a post are related by default. When you initially type the title of your post, the post slug (used in the permalink/URL) is automatically created. The post slug is the part of the URL after the date in a post URL. When the default post slug is created, all letters will be converted to lowercase, spaces will be exchanged with dashes, and any special characters will be removed.</p><p>You can modify the post slug by clicking the Edit button next to it. When you are finished editing, click OK. After you are done making your changes do not forget to click the Update button to update the post and save these changes. This is especially handy if, for example, your page title is very long, but you would like a URL that people can remember more easily.</p><p>If your language uses a non-western character set, long post titles can break post slugs. To fix that, shorten the post slug to a single word.</p><h3>Tags and Categories</h3><p>Tags and categories allow you to group your posts together.</p><h3>Discussion</h3><p>The Discussion module is used to turn the discussion options on/off for the post. If you want to set the defaults for these checkboxes, you can do so in the Discussion Settings of the blog. If you are editing a previously published post, the Discussion module would also show any comments for the post. Trackbacks are a way of letting other bloggers know when you have linked to their site.</p><h3>Post Author</h3><p>The Author module is used to change the author of a post. To change an author, use the dropdown menu to select the new author and click Update or Publish to save the changes.</p><h3>Excerpt</h3><p>Excerpt is the summary of your post. This is the part that is normally displayed on your home page, archive page, or category/tag page. If you want you can change it here.</p><h3>Troubleshooting</h3><p>If you are missing one of the modules listed above on your New Post or Edit Post page, you may need to enable it in your Screen Options settings.</p><p>Look at the top right corner, select the Screen Options button, and then check the modules you want.</p>'; }
	if(url.match(/edit-comments.php/g)=='edit-comments.php'){  welcome= 'The Comments area allows you to view, edit, and approve visitor comments. You can also select a comment as Spam or send it to the Trash.'; more =more_comments; }
	if(url.match(/themes.php/g)=='themes.php'){currentLearnMore=13; welcome= 'Click on Install Themes to find a new theme for your website. You can also search the internet for Premium Themes.'; more =more_themes; }
	if(url.match(/widgets.php/g)=='widgets.php'){welcome= 'Widgets allow you to easily arrange various elements of your blog by adding a widget in your sidebar. Just drag the widget you want from the left.'; more =more_widgets; }
	if(url.match(/nav-menus.php/g)=='nav-menus.php'){welcome= 'Your theme probably comes with a default navigation menu, but you may want to create a customized menu that consists of various posts, pages, categories or links outside of your blog.'; more =more_navmenus; }
	if(url.match(/themes.php/g)=='themes.php' && url.match(/page=custom-header/g)=='page=custom-header'){welcome= 'Here you can edit the default header elements.'; more =more_themes; }
	if(url.match(/theme-editor.php/g)=='theme-editor.php'){welcome= 'This is where you can manually edit the actual files of your WordPress theme. Say you want to edit the header of your WordPress blog. You would need to edit the header.php file to make these changes.'; more =more_themes; }
	if(url.match(/plugins.php/g)=='plugins.php'){ currentLearnMore=11; welcome= 'You can see the plugins you have installed on your website.'; more =more_plugins; }
	if(url.match(/plugin-install.php/g)=='plugin-install.php'){welcome= 'You can search here for free plugins, or the internet for premium plugins. '; more =more_plugins; }
	if(url.match(/plugin-editor.php/g)=='plugin-editor.php'){welcome= 'Manually edit the files of any plugin installed on your website. You can see the Function lookup dropdown for more information.'; more =more_plugins; }
	if(url.match(/tools.php/g)=='tools.php'){welcome= 'Tools can help you import, export, or somehow modify your posts, pages and attachments.'; more =more_tools; }
	if(url.match(/import.php/g)=='import.php'){welcome= 'You can import from your other blog, Tumblr, or any site via RSS.'; more =more_tools; }
	if(url.match(/export.php/g)=='export.php'){welcome= 'Export the content of this blog to another blog or site.'; more =more_tools; }
	if(url.match(/options-general.php/g)=='options-general.php'){  currentLearnMore=6; welcome= 'The General Settings let you change many of the items that control how your blog is displayed, such as the title, tagline, timezone, and date/time formats.'; more =more_general; }
	if(url.match(/options-writing.php/g)=='options-writing.php'){ currentLearnMore=7; welcome= 'The Writings Settings control your WordPress writing experience. For example for easier writing you can use PressThis or Post by Email.'; more =more_writing; }
	if(url.match(/options-reading.php/g)=='options-reading.php'){ currentLearnMore=8; welcome= 'By default, your front page is set to display your latest blog posts, but you can change it to a static front page.   '; more =more_reading; }
	if(url.match(/options-discussion.php/g)=='options-discussion.php'){  currentLearnMore=9; welcome= 'Set your comments settings here. You can select Comment Moderation settings and how WordPress should update you when a new comment is posted.'; more =more_discussion; }
	if(url.match(/options-permalink.php/g)=='options-permalink.php'){  currentLearnMore=10;welcome= 'Permalinks is the link structure of your site. This is one of the most important things for good post Search Engine Optimization (SEO).'; more = more_permalink; }
	return welcome+'***'+more; 
}

function lasgoHideLoading(){ 
jQuery('.lasgo_long_desc .icon-spin').hide();
}

var lasgo_level = la_level;

function openLongDesc(selected){
	jQuery('.lasgo_dim').animate({'opacity':'0.85'},300).show();
	jQuery('.lasgo_long_desc').css('top','-250px').animate({'opacity':'1','top':'5%'},500).show();
	if(selected=='.tablink-4' && lasgo_points_arr[currentLearnMore]=='0'){ lasgoAddPoints(currentLearnMore); }  	
	var containerHeight = jQuery('.lasgo_long_desc').outerHeight(); containerHeight = containerHeight-150; 
	jQuery('.long_desc_container').css('height',containerHeight+'px');

	jQuery('.tablink-2').click(function(){
	var askQuestionId = 'none';
	var containerHeight = jQuery('.lasgo_long_desc').outerHeight(); containerHeight = containerHeight-150; 
	if(lasgo_level==0 || lasgo_level==2 || lasgo_level==6){ askQuestionId = 'none'; } if(lasgo_level==1){ askQuestionId = '5'; } 
	if(lasgo_level==3){ askQuestionId = '12'; } if(lasgo_level==4){ askQuestionId = '14'; } if(lasgo_level==5){ askQuestionId = '15'; }

		jQuery('#lasgo-tabs-2 iframe').attr('src','http://www.wordpresshowtoblog.com/ask-a-question/?currentLearnMore='+askQuestionId+'&pluginurl='+la_pluginurl).css('height',containerHeight);
	});

	jQuery('.tablink-3').click(function(){
	var containerHeight = jQuery('.lasgo_long_desc').outerHeight(); containerHeight = containerHeight-100; 
	jQuery('#lasgo-tabs-3').css('height',containerHeight); jQuery('#lasgo-tabs-3').css('overflow-y','scroll');

	var lasgo_level_plus = lasgo_level+2-1; 
	var lasgo_level_min1 = lasgo_level-1; var lasgo_level_min4 = lasgo_level-4;
	var lasgo_level_min2 = lasgo_level-2; var lasgo_level_min5 = lasgo_level-5;
	var lasgo_level_min3 = lasgo_level-3; var lasgo_level_min6 = lasgo_level-6; 
	
	jQuery('.lasgo_levels li:nth-child('+lasgo_level+')').css({'background-color':'#336699','color':'#ffffff'}); 
	jQuery('.lasgo_levels li:nth-child('+lasgo_level_min1+')').css({'background-color':'#336699','color':'#ffffff'}); 
	jQuery('.lasgo_levels li:nth-child('+lasgo_level_min2+')').css({'background-color':'#336699','color':'#ffffff'}); 
	jQuery('.lasgo_levels li:nth-child('+lasgo_level_min3+')').css({'background-color':'#336699','color':'#ffffff'}); 
	jQuery('.lasgo_levels li:nth-child('+lasgo_level_min4+')').css({'background-color':'#336699','color':'#ffffff'}); 
	jQuery('.lasgo_levels li:nth-child('+lasgo_level_min5+')').css({'background-color':'#336699','color':'#ffffff'}); 
	jQuery('.lasgo_levels li:nth-child('+lasgo_level_min6+')').css({'background-color':'#336699','color':'#ffffff'});
	jQuery('.lasgo_levels li:nth-child('+lasgo_level_plus+')').animate({'background-color':'#f1fd65','color':'#000'},350); 
	});
	
	jQuery( "#lasgo_search" ).keydown(function(event) {
	if ( event.which == 13 ) {
		var searchTerm = jQuery('#lasgo_search').val(); jQuery('.tablink-sidebar-1').find('i').show();
		var containerHeight = jQuery('.lasgo_long_desc').outerHeight(); containerHeight = containerHeight-150;  
		jQuery('#lasgo-tabs-sidebar-1 iframe').attr('src','http://wordpress.org/search/'+searchTerm).css('height',containerHeight);
	}
	});
	
	jQuery('#lasgo_askquestion').keydown(function(event) {
	if ( event.which == 13 ) {
		jQuery('.tablink-2').click();
	}
	});
	
	jQuery('.tablink-sidebar-1, #lasgo_search_button').click(function(){
	var searchTerm = jQuery('#lasgo_search').val(); jQuery('.tablink-sidebar-1').find('i').show();
	var containerHeight = jQuery('.lasgo_long_desc').outerHeight(); containerHeight = containerHeight-150;  
		jQuery('#lasgo-tabs-sidebar-1 iframe').attr('src','http://wordpress.org/search/'+searchTerm).css('height',containerHeight);
	});
	jQuery('.tablink-sidebar-2').click(function(){
	var searchTerm = jQuery('#lasgo_search').val(); jQuery(this).find('i').show();
	var containerHeight = jQuery('.lasgo_long_desc').outerHeight(); containerHeight = containerHeight-150; 
		jQuery('#lasgo-tabs-sidebar-2 iframe').attr('src','http://en.support.wordpress.com/?s='+searchTerm).height(containerHeight);
		
	});
	jQuery('.tablink-sidebar-3').click(function(){
	var searchTerm = jQuery('#lasgo_search').val(); jQuery(this).find('i').show();
	var containerHeight = jQuery('.lasgo_long_desc').outerHeight(); containerHeight = containerHeight-150;  
		jQuery('#lasgo-tabs-sidebar-3 iframe').attr('src','http://wp.tutsplus.com/?s='+searchTerm).height(containerHeight);
	});
	jQuery('.tablink-sidebar-4').click(function(){
	var searchTerm = jQuery('#lasgo_search').val(); jQuery(this).find('i').show();
	var containerHeight = jQuery('.lasgo_long_desc').outerHeight(); containerHeight = containerHeight-150;  
		jQuery('#lasgo-tabs-sidebar-4 iframe').attr('src','http://www.siteground.com/search.htm?q='+searchTerm).height(containerHeight);
	});
		
		
			if(jQuery('.lasgo_hero').css('display')=='none'){
				jQuery('#lasgo_container').animate({'opacity':'0','top':'-100px'},200, function(){}).hide().css('visibility','hidden');
					jQuery('#lasgo_wrap').css('left','auto').animate({'right':'-250px','opacity':'0'},500, function(){
						jQuery('.lasgo_3dman').hide();  jQuery('.lasgo_hero').show(); 
						jQuery('#lasgo_wrap').animate({'right':'-5px','opacity':'1'},350,function(){
							jQuery('#lasgo_container').animate({'opacity':'1','top':'-160px'},200, function(){}).show().css('visibility','visible');
						});
					});
				}
	if(selected!='' && selected!=undefined) jQuery(selected).click();
}

var welcomeArr= getWelcome().split('***'); var welcomeShort= welcomeArr[0];
var welcome = (welcomeShort!='none')?welcomeShort+'<br><a href="javascript:void(0)" class="learn-more-link" onclick="openLongDesc(\'.tablink-4\');">Learn More</a>':la_welcome;


function lasgo_timer(func, delay){				
this.func = func;
    this.delay = delay;

    this.triggerSetAt = new Date().getTime();
    this.triggerTime = this.triggerSetAt + this.delay;

    this.i = window.setInterval(this.func, this.delay);

    this.t_restart = null;

    this.paused_timeLeft = 0;

    this.getTimeLeft = function(){
        var now = new Date();
        return this.delay - ((now - this.triggerSetAt) % this.delay);
    }

    this.pause = function(){
        this.paused_timeLeft = this.getTimeLeft();
        window.clearInterval(this.i);
        this.i = null;
    }

    this.restart = function(sender){

        sender.i = window.setInterval(sender.func, sender.delay);
    }
    this.resume = function(){
        if (this.i == null){
            this.i = window.setTimeout(this.restart, this.paused_timeLeft, this);
        }
    }
    this.clearInterval = function(){ window.clearInterval(this.i);}
}
if(lasgo_disable_jokes=='on'){ } else{
		var lasgo_timer_next = new lasgo_timer(function() {
						lasgo_load_next();
					}, 45000);
}

function lasgo_load_next(){
		lasgo_load_joke();
}

function lasgo_load_joke(){
	if(jQuery('.lasgo_ball').css('display')=='none'){
		if(randNumJoke!=undefined){ 
			randNumJoke = randNumJoke-1+2; if(randNumJoke==32){ randNumJoke=0;}
			} else {
			var randNumJoke = Math.floor((Math.random()*10)); 
			}
		var nextJoke = jokes[randNumJoke]; var nextJokeArr1 = nextJoke.split(' '); var nextLength = nextJokeArr1.length;
		var nextJokeArr2 = nextJoke.split(' '); var nextJokeArr3 = nextJoke.split(' '); var nextJokeArr4 = nextJoke.split(' '); 
		var nextJokeArr5 = nextJoke.split(' '); 
		var nextJoke1 = nextJokeArr1.splice(0, 25).join(' '); 
		var nextJoke2 = nextJokeArr2.splice(25, 25).join(' '); 
		var nextJoke3 = nextJokeArr3.splice(50,25).join(' ');
		var nextJoke4 = nextJokeArr4.splice(75,25).join(' ');
		var nextJoke5 = nextJokeArr5.splice(100,25).join(' ');
		var content = jQuery('#lasgo_content').html();
		jQuery('#lasgo_content').remove(); 			
		jQuery('#lasgo_container').html('<div id="lasgo_content" class="lc_joke" style="opacity:0;"><div class="lasgo_joke">.. the Motherboard told me this funny joke.. '+nextJoke1+'</div></div><div id="lasgo_arrow" class="la_joke" ><i class="icon-caret-down icon-large"></i></div>');
		jQuery('#lasgo_content').animate({opacity:1},300);
		jQuery('#lasgo_wrap').click(function(){ 
			jQuery('#lasgo_content').html(content).removeClass().addClass('lc_normal').show();
			jQuery('#lasgo_arrow').removeClass().addClass('la_normal').show();
		});
		lasgo_timer.pause;
		if(nextLength>25){
			var lasgo_line = setTimeout(function(){		
			jQuery('.lasgo_joke').html(nextJoke2);  
			if(nextLength>50){ 
				var lasgo_line2 = setTimeout(function(){
					jQuery('.lasgo_joke').html(nextJoke3); 
					if(nextLength>75){
						var lasgo_line3 = setTimeout(function(){
							jQuery('.lasgo_joke').html(nextJoke4); 
							if(nextLength>100){
							var lasgo_line4 = setTimeout(function(){
								jQuery('.lasgo_joke').html(nextJoke5); 
								lasgo_timer.resume;  var lasgo_change_content = setTimeout(function(){ jQuery('#lasgo_content').html(content).removeClass().addClass('lc_normal').hide(); jQuery('#lasgo_arrow').removeClass().addClass('la_normal').removeClass('la_joke').hide(); },9000); 
							},7000);	
							}	 else {lasgo_timer.resume;  var lasgo_change_content = setTimeout(function(){ jQuery('#lasgo_content').html(content).removeClass().addClass('lc_normal').removeClass('lc_joke').hide(); jQuery('#lasgo_arrow').removeClass().addClass('la_normal').removeClass('la_joke').hide(); },9000); }	
						},7000);	
						}	 else {lasgo_timer.resume;  var lasgo_change_content = setTimeout(function(){ jQuery('#lasgo_content').html(content).removeClass().addClass('lc_normal').removeClass('lc_joke').hide(); jQuery('#lasgo_arrow').removeClass().addClass('la_normal').removeClass('la_joke').hide(); },9000); }			
				},7000);	
				}  else {lasgo_timer.resume;  var lasgo_change_content = setTimeout(function(){ jQuery('#lasgo_content').html(content).removeClass().addClass('lc_normal').removeClass('lc_joke').hide(); jQuery('#lasgo_arrow').removeClass().addClass('la_normal').removeClass('la_joke').hide(); },9000); }
			},9000);
		} else {lasgo_timer.resume; var lasgo_change_content = setTimeout(function(){ jQuery('#lasgo_content').html(content).removeClass().addClass('lc_normal').removeClass('lc_joke').hide(); jQuery('#lasgo_arrow').removeClass().addClass('la_normal').removeClass('la_joke').hide(); },9000); }
		
	}	
}

function lasgoAddPoints(pointid){

	var data = {
		action: 'lasgo_add_points',
		pointid: pointid,
		whatever: '1234'     
	};
	
	jQuery.post(ajax_object.ajax_url, data, function(response) {
	
	jQuery('.lasgo-level-wrap').html(response); 	
			
			var content = jQuery('#lasgo_content').html(); var contentClass = jQuery('#lasgo_content').attr('class'); 
			var arrClass= jQuery('#lasgo_arrow').attr('class');
			jQuery('#lasgo_content').text('You just earned a point! :)').removeClass().addClass('lc_menuhov').show();
			jQuery('#lasgo_arrow').removeClass().addClass('la_menuhov').show();		
			jQuery('#lasgo_animation').effect( "pulsate", "slow" );
			var lasgo_change_content = setTimeout(function(){ 
				jQuery('#lasgo_content').html(content);
				jQuery('#lasgo_content').removeClass().addClass(contentClass);
				jQuery('#lasgo_arrow').removeClass().addClass(arrClass);
			},3000);
			jQuery('.tablink-3').click();
		}
	);
}

	
var lasgoScore=0; var currentQuestion = 1; 
var randNum =0;

function lasgoLaunchTest(){
var currentQuestion = 1; var lasgoScore=0;
 jQuery('.lasgo-level-wrap').hide();
 jQuery('.lasgo-exam-wrap').show().html('<h3>Lasgo Exam</h3><div id="lasgo_score">Score: '+lasgoScore+'</div><div id="lasgo_timesup">Time is up!</div><div class="lasgo_timer"><i class="icon-time"></i> <span class="lasgo_timer_num">60</span></div>');
	if(lasgo_level=='0') var lasgo_questions = lasgo_questions_1;
	if(lasgo_level=='1') var lasgo_questions = lasgo_questions_2;
	if(lasgo_level=='2') var lasgo_questions = lasgo_questions_3;
	if(lasgo_level=='3') var lasgo_questions = lasgo_questions_4;
	if(lasgo_level=='4') var lasgo_questions = lasgo_questions_5;
	if(lasgo_level=='5') var lasgo_questions = lasgo_questions_6;
	if(lasgo_level=='6') var lasgo_questions = lasgo_questions_7;
  	var randNum = Math.floor((Math.random()*10)); 
	var lasgo_questions_random = lasgo_questions[randNum][0]; var lasgo_answer_1 = lasgo_questions[randNum][1];  
	var lasgo_answer_2 = lasgo_questions[randNum][2];  var lasgo_answer_3 = lasgo_questions[randNum][3];  
	var lasgo_answer_4 = lasgo_questions[randNum][4]; var lasgo_answer_correct = parseInt(lasgo_questions[randNum][5]);
  jQuery('.lasgo-exam-wrap').append('<div class="lasgo_exam_questions"><h4>Question '+currentQuestion+'</h4><h3>'+lasgo_questions_random+'</h3><ul class="lasgo_answers_list"><li><a href="javascript:void(0)">A: '+lasgo_answer_1+'</a></li><li><a href="javascript:void(0)">B: '+lasgo_answer_2+'</a></li><li><a href="javascript:void(0)">C: '+lasgo_answer_3+'</a></li><li><a href="javascript:void(0)">D: '+lasgo_answer_4+'</a></li></ul></div>');
jQuery('.lasgo_answers_list a').click(function(){
	var correct = lasgo_answer_correct; 
	if(jQuery(this).text()==jQuery('.lasgo_answers_list li:nth-child('+correct+') a').text()){ lasgoScore=lasgoScore-1+2; jQuery('#lasgo_score').text('Score: '+lasgoScore); }
	lasgoexamtimer=window.clearInterval(lasgoexamtimer);
	var currentQuestion = 1;  lasgoNextQuestion();
});
  var lasgoexamtimer=self.setInterval(function(){ 
	var timer_num = parseInt(jQuery('.lasgo_timer_num').text()); var timer_num_min = timer_num-1;
	if(timer_num>0){ jQuery('.lasgo_timer_num').text(timer_num_min); }
	else{ lasgoexamtimer=window.clearInterval(lasgoexamtimer); lasgoNextQuestion(1); }
 },1000);

}

function lasgoNextQuestion(timesup){
currentQuestion = currentQuestion-1+2; 
if(currentQuestion>10){ lasgoDisplayResults(); return; } else{
	if(timesup=='1'){
	jQuery('#lasgo_timesup').animate({'opacity':'1'},300,function(){
		jQuery(this).animate({'opacity':'0'},0);
	});
	}
	jQuery('.lasgo_timer_num').text('60');
	if(lasgo_level=='0') var lasgo_questions = lasgo_questions_1;
	if(lasgo_level=='1') var lasgo_questions = lasgo_questions_2;
	if(lasgo_level=='2') var lasgo_questions = lasgo_questions_3;
	if(lasgo_level=='3') var lasgo_questions = lasgo_questions_4;
	if(lasgo_level=='4') var lasgo_questions = lasgo_questions_5;
	if(lasgo_level=='5') var lasgo_questions = lasgo_questions_6;
	if(lasgo_level=='6') var lasgo_questions = lasgo_questions_7;
	randNum = randNum-1+2; if(randNum==10){ randNum=0;}
	var lasgo_questions_random = lasgo_questions[randNum][0]; var lasgo_answer_1 = lasgo_questions[randNum][1];  
	var lasgo_answer_2 = lasgo_questions[randNum][2];  var lasgo_answer_3 = lasgo_questions[randNum][3];  
	var lasgo_answer_4 = lasgo_questions[randNum][4]; var lasgo_answer_correct = parseInt(lasgo_questions[randNum][5]);
	jQuery('.lasgo_exam_questions').html('<h4>Question '+currentQuestion+'</h4><h3>'+lasgo_questions_random+'</h3><ul class="lasgo_answers_list"><li><a href="javascript:void(0)">A: '+lasgo_answer_1+'</a></li><li><a href="javascript:void(0)">B: '+lasgo_answer_2+'</a></li><li><a href="javascript:void(0)">C: '+lasgo_answer_3+'</a></li><li><a href="javascript:void(0)">D: '+lasgo_answer_4+'</a></li></ul>');
	jQuery('.lasgo_answers_list a').click(function(){
		var correct = lasgo_answer_correct;
		if(jQuery(this).text()==jQuery('.lasgo_answers_list li:nth-child('+correct+') a').text()){ lasgoScore=lasgoScore-1+2; jQuery('#lasgo_score').text('Score: '+lasgoScore);}
		lasgoexamtimer=window.clearInterval(lasgoexamtimer);
		lasgoNextQuestion();
	});
	  var lasgoexamtimer=self.setInterval(function(){ 
		var timer_num = parseInt(jQuery('.lasgo_timer_num').text()); var timer_num_min = timer_num-1;
		if(timer_num>0){ jQuery('.lasgo_timer_num').text(timer_num_min); }
		else{ lasgoexamtimer=window.clearInterval(lasgoexamtimer); lasgoNextQuestion(1); }
	 },1000);
	 
}
}

function  lasgoDisplayResults(){

	currentQuestion = 1;
	 if(lasgoScore>5){
		jQuery('.lasgo-exam-wrap').html('<h1 align="center"  style="margin-top:30px;">Congratulations!</h1><h2 align="center">You passed with '+lasgoScore+'0%</h2><p align="center" class="lasgo_update_level"><i class="icon-spinner icon-spin"></i> Updating level..</p>');
			var data = {
				action: 'lasgo_levels',
				whatever: '1234'   
			};
			
			jQuery.post(ajax_object.ajax_url, data, function(response) {
		
			jQuery('.lasgo-level-wrap').html(response); 
			lasgo_level = lasgo_level-1+2;
			jQuery('.tablink-3').click();
				
				
			});

	 } else {
		jQuery('.lasgo-exam-wrap').html('<h1 align="center" style="margin-top:30px;">Sorry, You Failed!</h1><h2 align="center">You scored only '+lasgoScore+'0%</h2><p align="center"><a href="javascript:void" onclick="returnToLevels()">Go back to levels & points</a></p>');
	 }
	 lasgoScore =0;
		lasgoexamtimer=window.clearInterval(lasgoexamtimer); 
}

function returnToLevels(){
	jQuery('.lasgo-level-wrap').show(); jQuery('.lasgo-exam-wrap').hide();
}

pointMenuHover = 0;
function load_lasgo() {
		var welcomeLong = (welcomeArr[1]!='none')?welcomeArr[1]:'Learn more section is not available for this particular page. Try searching for your questions.';
		var longDesc = '<div style="overflow-y:scroll;" class="long_desc_container">'+welcomeLong+'</div>';
		var body = jQuery('body');
		var tabsHTML = la_tabsHTML;
		body.prepend('<div class="lasgo_dim"></div><div class="lasgo_long_desc">'+tabsHTML+longDesc+la_askquestion+'</div><div id="lasgo-tabs-5">'+lasgo_brand_tab_content+'</div></div></div>');
		body.prepend('<div id="lasgo_wrap"><div id="lasgo_container" class="lasgo_container_short"><div id="lasgo_content" class="lc_normal"></div><div id="lasgo_arrow" class="la_normal" ><i class="icon-caret-down icon-large"></i></div></div><div id="lasgo_animation"><img src="'+lasgo_animation_src+'" class="lasgo_3dman"/><img src="'+lasgo_ball_src+'" class="lasgo_ball" style="height:30px; width:25px;" /><img src="'+lasgo_hero_src+'" class="lasgo_hero" style="margin:15px 0 0 25px;"  /></div><div class="lasgo_minimize">'+lasgo_icons+'</div></div>');
		jQuery('.lasgo_ball, .lasgo_hero').hide();
		jQuery('.lasgo_dim, .lasgo-close-button').click(function(){
			jQuery('.lasgo_dim, .lasgo_long_desc').animate({'opacity':'0'},300).hide();
			jQuery('#lasgo_container').animate({'opacity':'0','top':'-100px'},200, function(){}).hide().css('visibility','hidden');
			jQuery('#lasgo_wrap').css('left','auto').animate({'right':'-250px','opacity':'0'},500, function(){
						jQuery('.lasgo_3dman').show();  jQuery('.lasgo_hero').hide(); 
						jQuery('#lasgo_wrap').animate({'right':'-5px','opacity':'1'},350,function(){
							jQuery('#lasgo_container').animate({'opacity':'1','top':'-160px'},200, function(){}).show().css('visibility','visible');
						});
			});
		}); 
		
		
		jQuery( "#lasgo_animation .lasgo_3dman" ).click(function(){
			jQuery(this).effect( "bounce", "slow" );
		});
		jQuery( "#lasgo_animation .lasgo_hero" ).click(function(){
			jQuery(this).effect( "pulsate", "slow" );
		});		
		
		 jQuery( "#lasgo_tabs" ).tabs();
		  jQuery( "#lasgo_tabs_sidebar" ).tabs().removeClass().addClass( "ui-tabs-vertical ui-helper-clearfix" );
		  jQuery( "#lasgo_tabs_sidebar li" ).removeClass( "ui-corner-top" ).removeClass().addClass( "ui-corner-left" );
		var lasgo_content = jQuery('#lasgo_content');
		lasgo_content.html(welcome).removeClass().addClass('lc_normal');
		jQuery('#lasgo_wrap').animate({'right':'5px'},300,function(){ 
			jQuery('#lasgo_container').animate({'opacity':'1','top':'-160px'},500);
			});
		
		jQuery( "#lasgo_wrap" ).draggable({ 
				containment: "parent",
				start: function() {
				jQuery( "#lasgo_wrap" ).css('right','auto');
				jQuery('#lasgo_container').animate({'opacity':'0','top':'-100px'},300);
				},
				stop: function() {
				if(jQuery('.lasgo_ball').css('display')=='none'){ jQuery('#lasgo_container').animate({'opacity':'1','top':'-160px'},300); } else {}
				}
				});
				
		jQuery('.lasgo_minimize .icon-collapse, .lasgo_ball').click(function(){
				if(jQuery('.lasgo_ball').css('display')=='none'){
				// close
				jQuery('#lasgo_container').animate({'opacity':'0','top':'-100px'},200, function(){}).hide().css('visibility','hidden');
				jQuery('.lasgo_hero').hide();
				jQuery('.lasgo_3dman').animate({'height':'30px','width':'25px','opacity':'0'},500, function(){
					jQuery('.lasgo_ball').show().animate({'height':'125px','width':'125px','opacity':'1'},350,function(){
							jQuery('.lasgo_ball').animate({'height':'85px','width':'85px'},150,function(){
								jQuery( "#lasgo_wrap" ).css('left','auto').animate({'right':'-120px'},350);
							});
					});
				}).hide();
				
				} else {
				//open
				jQuery('#lasgo_container').css({'visibility':'hidden','opacity':'0','top':'-100px'});
				jQuery('.lasgo_ball').animate({'height':'30px','width':'25px','opacity':'0'},500, function(){
					jQuery('.lasgo_3dman').show().animate({'height':'225px','width':'175px','opacity':'1'},350,function(){
							jQuery('.lasgo_3dman').animate({'height':'190px','width':'155px'},150,function(){
								jQuery( "#lasgo_wrap" ).css('left','auto').animate({'right':'5px'},350,function(){
									jQuery('#lasgo_container').animate({'opacity':'1','top':'-160px'},200, function(){}).show().css('visibility','visible');
								});
								
							});
					});
				}).hide();
				
			
				}
		});		
		
		
		if(lasgo_open_minimize=='on'){
			jQuery('#lasgo_container').animate({'opacity':'0','top':'-100px'},200, function(){}).hide().css('visibility','hidden');
				jQuery('.lasgo_hero').hide();
				jQuery('.lasgo_3dman').animate({'height':'30px','width':'25px','opacity':'0'},500, function(){
					jQuery('.lasgo_ball').show().animate({'height':'125px','width':'125px','opacity':'1'},350,function(){
							jQuery('.lasgo_ball').animate({'height':'85px','width':'85px'},150,function(){
								jQuery( "#lasgo_wrap" ).css('left','auto').animate({'right':'-120px'},350);
							});
					});
				}).hide();
		}
		
		
		
		jQuery('.lasgo_minimize .icon-search').click(function(){
			openLongDesc('.tablink-1');
		});	
		jQuery('.lasgo_minimize .icon-external-link ').click(function(){
			openLongDesc('.tablink-1');
		});
		jQuery('.lasgo_minimize .icon-money ').click(function(){
			openLongDesc('.tablink-3');
		});
		jQuery('.lasgo_minimize .icon-flag ').click(function(){
			openLongDesc('.tablink-3');
		});
		jQuery('.lasgo-test-button').click(function(){
			 lasgoLaunchTest(); 
		});
		
	
		
		jQuery('#lasgo_wrap').hover(function(){
				jQuery('.lasgo_minimize').animate({'opacity':'1'},300);
				},
				function(){
				jQuery('.lasgo_minimize').animate({'opacity':'0'},300);
				});
		var pointMenuHover =0;
		jQuery('#menu-dashboard').hover(function(){ pointMenuHover= pointMenuHover+1; if(pointMenuHover==10){ lasgoAddPoints('0');}
				jQuery('#lasgo_arrow').hide(); 
				jQuery('#lasgo_content').hide();
					jQuery('#lasgo_content').html(la_default_menu_dashboard).removeClass().addClass('lc_menuhov').show(); 
					 jQuery('#lasgo_arrow').removeClass().addClass('la_menuhov').show(); 
				},
				function(){ jQuery('#lasgo_arrow').hide();
				jQuery('#lasgo_content').hide();
					jQuery('#lasgo_content').html(welcome).removeClass().addClass('lc_normal').show(); jQuery('#lasgo_arrow').removeClass().addCLass('la_normal').show();
			
				});

		jQuery('#menu-posts').hover(function(){ jQuery('#lasgo_arrow').hide();pointMenuHover= pointMenuHover+1; if(pointMenuHover==10){ lasgoAddPoints('0');}
						jQuery('#lasgo_content').hide(); jQuery('#lasgo_content').html(la_default_menu_posts).css({'opacity':'1'}).removeClass().addClass('lc_menuhov').show();  jQuery('#lasgo_arrow').removeClass().addClass('la_menuhov').show();
				}, function(){ jQuery('#lasgo_arrow').hide();
						jQuery('#lasgo_content').hide(); jQuery('#lasgo_content').html(welcome).removeClass().addClass('lc_normal').show(); jQuery('#lasgo_arrow').removeClass().addCLass('la_normal').show(); 
				});
		jQuery('#menu-media').hover(function(){ jQuery('#lasgo_arrow').hide();pointMenuHover= pointMenuHover+1; if(pointMenuHover==10){ lasgoAddPoints('0');}
						jQuery('#lasgo_content').hide(); jQuery('#lasgo_content').html(la_default_menu_media).css({'opacity':'1'}).removeClass().addClass('lc_menuhov').show();  jQuery('#lasgo_arrow').removeClass().addClass('la_menuhov').show();
				}, function(){ jQuery('#lasgo_arrow').hide();
						jQuery('#lasgo_content').hide(); jQuery('#lasgo_content').html(welcome).removeClass().addClass('lc_normal').show(); jQuery('#lasgo_arrow').removeClass().addCLass('la_normal').show(); 
				});		
		jQuery('#menu-pages').hover(function(){ jQuery('#lasgo_arrow').hide();pointMenuHover= pointMenuHover+1; if(pointMenuHover==10){ lasgoAddPoints('0');}
						jQuery('#lasgo_content').hide(); jQuery('#lasgo_content').html(la_default_menu_pages).css({'opacity':'1'}).removeClass().addClass('lc_menuhov').show();  jQuery('#lasgo_arrow').removeClass().addClass('la_menuhov').show();
				}, function(){ jQuery('#lasgo_arrow').hide();
						jQuery('#lasgo_content').hide(); jQuery('#lasgo_content').html(welcome).removeClass('lc_menuhov').removeClass().addClass('lc_normal').show(); jQuery('#lasgo_arrow').removeClass().addCLass('la_normal').show(); 
				});	
		jQuery('#menu-comments').hover(function(){ jQuery('#lasgo_arrow').hide();pointMenuHover= pointMenuHover+1; if(pointMenuHover==10){ lasgoAddPoints('0');}
						jQuery('#lasgo_content').hide(); jQuery('#lasgo_content').html(la_default_menu_comments).css({'opacity':'1'}).removeClass().addClass('lc_menuhov').show();  jQuery('#lasgo_arrow').removeClass().addClass('la_menuhov').show();
				}, function(){ jQuery('#lasgo_arrow').hide();
						jQuery('#lasgo_content').hide(); jQuery('#lasgo_content').html(welcome).removeClass().addClass('lc_normal').show(); jQuery('#lasgo_arrow').removeClass().addCLass('la_normal').show(); 
				});		
		jQuery('#menu-appearance').hover(function(){ jQuery('#lasgo_arrow').hide();pointMenuHover= pointMenuHover+1; if(pointMenuHover==10){ lasgoAddPoints('0');}
						jQuery('#lasgo_content').hide(); jQuery('#lasgo_content').html(la_default_menu_appearance).css({'opacity':'1'}).removeClass().addClass('lc_menuhov').show();  jQuery('#lasgo_arrow').removeClass().addClass('la_menuhov').show();
				}, function(){ jQuery('#lasgo_arrow').hide();
						jQuery('#lasgo_content').hide(); jQuery('#lasgo_content').html(welcome).removeClass().addClass('lc_normal').show(); jQuery('#lasgo_arrow').removeClass().addCLass('la_normal').show(); 
				});		
		jQuery('#menu-plugins').hover(function(){ jQuery('#lasgo_arrow').hide();pointMenuHover= pointMenuHover+1; if(pointMenuHover==10){ lasgoAddPoints('0');}
						jQuery('#lasgo_content').hide(); jQuery('#lasgo_content').html(la_default_menu_plugins).css({'opacity':'1'}).removeClass().addClass('lc_menuhov').show();  jQuery('#lasgo_arrow').removeClass().addClass('la_menuhov').show();
				}, function(){ jQuery('#lasgo_arrow').hide();
						jQuery('#lasgo_content').hide(); jQuery('#lasgo_content').html(welcome).removeClass().addClass('lc_normal').show(); jQuery('#lasgo_arrow').removeClass().addCLass('la_normal').show(); 
				});	
		jQuery('#menu-users').hover(function(){ jQuery('#lasgo_arrow').hide();pointMenuHover= pointMenuHover+1; if(pointMenuHover==10){ lasgoAddPoints('0');}
						jQuery('#lasgo_content').hide(); jQuery('#lasgo_content').html(la_default_menu_users).css({'opacity':'1'}).removeClass().addClass('lc_menuhov').show();  jQuery('#lasgo_arrow').removeClass().addClass('la_menuhov').show();
				}, function(){ jQuery('#lasgo_arrow').hide();
						jQuery('#lasgo_content').hide(); jQuery('#lasgo_content').html(welcome).removeClass().addClass('lc_normal').show(); jQuery('#lasgo_arrow').removeClass().addCLass('la_normal').show(); 
				});	
		jQuery('#menu-tools').hover(function(){ jQuery('#lasgo_arrow').hide();pointMenuHover= pointMenuHover+1; if(pointMenuHover==10){ lasgoAddPoints('0');}
						jQuery('#lasgo_content').hide(); jQuery('#lasgo_content').html(la_default_menu_tools).css({'opacity':'1'}).removeClass().addClass('lc_menuhov').show();  jQuery('#lasgo_arrow').removeClass().addClass('la_menuhov').show();
				}, function(){ jQuery('#lasgo_arrow').hide();
						jQuery('#lasgo_content').hide(); jQuery('#lasgo_content').html(welcome).removeClass().addClass('lc_normal').show(); jQuery('#lasgo_arrow').removeClass().addCLass('la_normal').show(); 
				});		
		jQuery('#menu-settings').hover(function(){ jQuery('#lasgo_arrow').hide();pointMenuHover= pointMenuHover+1; if(pointMenuHover==10){ lasgoAddPoints('0');}
						jQuery('#lasgo_content').hide(); 
						jQuery('#lasgo_content').html(la_default_menu_settings).css({'opacity':'1'}).removeClass().addClass('lc_menuhov').show();  jQuery('#lasgo_arrow').removeClass().addClass('la_menuhov').show();
				}, function(){ jQuery('#lasgo_arrow').hide();
						jQuery('#lasgo_content').hide(); jQuery('#lasgo_content').html(welcome).removeClass().addClass('lc_normal').show(); jQuery('#lasgo_arrow').removeClass().addCLass('la_normal').show(); 
				});		

				
				
}
if(lasgo_disable=='on'){ } else{
window.onload = load_lasgo; 
}


		