var configs = {
    "classUrl": "https://www.meetup.com/Girl-Develop-It-Burlington/events/242767452/",
    "chapterUrl": "http://www.meetup.com/Girl-Develop-It-Burlington/#upcoming"
};
var quizJSON = {
    "info": {
        "name":    "Intermediate HTML and CSS Pre-Class Assessment",
        "main":    "<p>This quiz is to evaluate your HTML and CSS knowledge for the <a target='_blank' href='"+configs.classUrl+"'>GDI Burlington Intermediate HTML and CSS class</a>.</p>",
        "results": "<h5>More HTML & CSS Resources</h5><ul><li><a target='_blank' href='http://girldevelopit.com/materials'>Girl Develop It Course Materials</a></li><li><a target='_blank' href='https://developer.mozilla.org/en-US/docs/CSS'>Mozilla Developer Network CSS Tutorials</a></li><li><a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/HTML'>Mozilla Developer Network HTML Tutorials</a></li><li><a target='_blank' href='http://css-tricks.com/'>CSS-Tricks</a> for Demos, Tips, and Code Snippets</li><li><a target='_blank' href='http://html5doctor.com/'>HTML5 Doctor</a> for modern HTML use</li></ul>",
        "level1":  "You're ready to take your development chops to the next level with HTML5 and CSS 3 - <a target='_blank' href='"+configs.classUrl+"'>go sign up</a>!",
        "level2":  "You're ready to take your development chops to the next level with HTML5 and CSS 3 - <a target='_blank' href='"+configs.classUrl+"'>go sign up</a>!",
        "level3":  "You should brush up on your basic HTML & CSS skills before taking our intermediate course - we want you to be comfortable with the basics before diving in to the fancier stuff. Check out <a target='_blank' href='"+configs.chapterUrl+"'>upcoming Girl Develop It classes</a> or review the <a target='_blank' href='http://girldevelopit.com/materials'>HTML/CSS class materials</a> to beef up your skills.",
        "level4":  "You should brush up on your basic HTML & CSS skills before taking our intermediate course - we want you to be comfortable with the basics before diving in to the fancier stuff. Check out <a target='_blank' href='"+configs.chapterUrl+"'>upcoming Girl Develop It classes</a> or review the <a target='_blank' href='http://girldevelopit.com/materials'>HTML/CSS class materials</a> to beef up your skills.",
        "level5":  "You should brush up on your basic HTML & CSS skills before taking our intermediate course - we want you to be comfortable with the basics before diving in to the fancier stuff. Check out <a target='_blank' href='"+configs.chapterUrl+"'>upcoming Girl Develop It classes</a> or review the <a target='_blank' href='http://girldevelopit.com/materials'>HTML/CSS class materials</a> to beef up your skills."
    },
    "questions": [
        { // Question 1
            "q": "CSS is used to...",
            "a": [
                {"option": "lend structure to the document",      "correct": false},
                {"option": "script the interactions on the page",     "correct": false},
                {"option": "style the presentation of the document",      "correct": true},
                {"option": "update content in the document ",     "correct": false}
            ],
            "correct": "<p><span>You got it-</span> Cascading Style Sheets control the presentation of a webpage.</p>",
            "incorrect": "<p><span>Incorrect.</span> <a target='_blank' href='https://developer.mozilla.org/en-US/docs/CSS'>Learn more about the role of Cascading Style Sheets in web documents</a>.</p>"
        },
        { // Question 2
            "q": "What is the correct HTML for creating a hyperlink?",
            "a": [
                {"option": '&lt;a name="http://girldevelopit.com"&gt;GirlDevelopIt.com&lt;/a&gt;',    "correct": false},
                {"option": '&lt;a href="http://girldevelopit.com"&gt;Girl Develop It&lt;/a&gt;',     "correct": true},
                {"option": '&lt;a url="http://girldevelopit.com"&gt;GirlDevelopIt.com',      "correct": false},
                {"option": '&lt;a&gt;http://girldevelopit.com&lt;/a&gt;',   "correct": false}
            ],
            "correct": "<p><span>You got it!</span> Links are the foundation of the web.</p>",
            "incorrect": "<p><span>Incorrect.</span> A webpage isn't much use without links to other pages and sites. <a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a'>Review the anchor element</a>.</p>"
        },
        { // Question 3
            "q": "What is the total width of this container when accounting for the box model? <br>#container {width: 100px; padding: 20px 10px;}",
            "a": [
                {"option": "110px",    "correct": false},
                {"option": "120px",     "correct": true},
                {"option": "100px",      "correct": false},
                {"option": "140px",   "correct": false}
            ],
            "correct": "<p><span>You got it!</span> 100 pixels wide + 10 pixels of padding on each side = 120 pixels total width.</p>",
            "incorrect": "<p><span>Incorrect.</span> 100 pixels wide + 10 pixels of padding on each side = 120 pixels total width. <a target='_blank' href='https://developer.mozilla.org/en-US/docs/CSS/box_model'>Review the box model</a>.</p>"
        },
        { // Question 4
            "q": "Which of the following is used to display links <strong>without</strong> an underline?",
            "a": [
                {"option": "{ text-decoration: no-underline; }",        "correct": false},
                {"option": "{ text-decoration: underline; }",           "correct": false},
                {"option": "{ text-decoration: 0; }",  "correct": false},
                {"option": "{ text-decoration: none; }",   "correct": true}
            ],
            "correct": "<p><span>Yup, you got it.</span></p>",
            "incorrect": "<p><span>Incorrect.</span> Check out this <a target='_blank' href='https://developer.mozilla.org/en-US/docs/CSS/text-decoration'>text-decoration documentation</a> to learn more.</p>"
        },
        { // Question 5
            "q": "The # symbol specifies that the selector is...",
            "a": [
                {"option": "a class",        "correct": false},
                {"option": "an element",           "correct": false},
                {"option": "a tag",  "correct": false},
                {"option": "an ID",   "correct": true}
            ],
            "correct": "<p><span>Correct!</span> You know the difference between a class and an ID.</p>",
            "incorrect": "<p><span>Incorrect.</span> Check out this <a target='_blank' href='https://developer.mozilla.org/en-US/docs/CSS/Getting_Started/Selectors'>CSS selector documentation</a> to review.</p>"
        },
        { // Question 6
            "q": "What is the correct HTML for inserting an image?",
            "a": [
                {"option": '&lt;img href="image.png" alt="My Image" /&gt;',    "correct": false},
                {"option": '&lt;img alt="My Image"&gt;image.png',     "correct": false},
                {"option": '&lt;image src="image.png" alt="My Image" /&gt;',      "correct": false},
                {"option": '&lt;img src="image.png" alt="My Image" /&gt;',   "correct": true}
            ],
            "correct": "<p><span>You got it!</span> Go forth and add more cat pictures to the interwebs!</p>",
            "incorrect": "<p><span>Incorrect.</span> The internet needs more cat pictures. Learn how to insert them into your pages at the <a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img'>Mozilla Developer Network</a>.</p>"
        },
        { // Question 7
            "q": "What is the right margin value in the follow style? <br>#id {margin: 20px 30px 10px 50px; }",
            "a": [
                {"option": "20px",        "correct": false},
                {"option": "30px",           "correct": true},
                {"option": "10px",  "correct": false},
                {"option": "50px",   "correct": false}
            ],
            "correct": "<p><span>Good Job!</span> You know your CSS shorthand values!</p>",
            "incorrect": "<p><span>Incorrect.</span> Read up on <a target='_blank' href='https://developer.mozilla.org/en-US/docs/CSS/Shorthand_properties#Margin_and_Padding_Properties'>CSS shorthand for the margin property</a>.</p>"
        },
        { // Question 8
            "q": "Which property is used to change the size of text?",
            "a": [
                {"option": "size",        "correct": false},
                {"option": "type",           "correct": false},
                {"option": "font-size",  "correct": true},
                {"option": "type-size",   "correct": false}
            ],
            "correct": "<p><span>Right on!</span> CSS has tricky properties with both font- and type- prefixes, but you know your stuff!</p>",
            "incorrect": "<p><span>Incorrect.</span> Review the CSS font properties on the <a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts'>Mozilla Developer Network</a>.</p>"
        },
        { // Question 9
            "q": "Which of the following CSS selectors has the most <a target='_blank' href='https://developer.mozilla.org/en-US/docs/CSS/Specificity'>specificity</a>?",
            "a": [
                {"option": "p.description a",        "correct": true},
                {"option": "p",           "correct": false},
                {"option": "p a",  "correct": false},
                {"option": ".description a",   "correct": false}
            ],
            "correct": "<p><span>Correct!</span> p.description a is the most <a target='_blank' href='https://developer.mozilla.org/en-US/docs/CSS/Specificity'>specific</a> selector.</p>",
            "incorrect": "<p><span>Incorrect.</span> You should read up on <a target='_blank' href='https://developer.mozilla.org/en-US/docs/CSS/Specificity'>CSS specificity</a> for more info</p>"
        },
        { // Question 10
            "q": "Which element is an unordered list?",
            "a": [
                {"option": "&lt;list&gt;",        "correct": false},
                {"option": "&lt;ul&gt;",   "correct": true},
                {"option": "&lt;ol&gt;",           "correct": false},
                {"option": "&lt;ulist&gt;",  "correct": false}
            ],
            "correct": "<p><span>Good Job!</span> You're an HTML genius.</p>",
            "incorrect": "<p><span>Incorrect.</span> The answer is <a target='_blank' href='http://html5doctor.com/element-index/#ul'>ul</a>, which is short for <strong>u</strong>nordered <strong>l</strong>ist.</p>"
        },
        { // Question 11
            "q": "How do you center a block-level element horizontally?",
            "a": [
                {"option": "{ align: center; }",        "correct": false},
                {"option": "{ float: middle; }",           "correct": false},
                {"option": "{ margin: 50%; }",  "correct": false},
                {"option": "{ margin: 0 auto; }",   "correct": true}
            ],
            "correct": "<p><span>Good Job!</span> You're a centering pro.</p>",
            "incorrect": "<p><span>Incorrect.</span> Check out the <a target='_blank' href='https://developer.mozilla.org/en-US/docs/CSS/margin#Examples'>margin property</a> to see how to center a <a target='_blank' href='https://developer.mozilla.org/en-US/docs/HTML/Block-level_elements'>block-level element</a>.</p>"
        },
        { // Question 12
            "q": "What is the correct HTML tag for the most important heading?",
            "a": [
                {"option": "&lt;head&gt;",        "correct": false},
                {"option": "&lt;h6&gt;",           "correct": false},
                {"option": "&lt;header&gt;",  "correct": false},
                {"option": "&lt;h1&gt;",   "correct": true}
            ],
            "correct": "<p><span>Yup!</span> You're the hierarchy expert.</p>",
            "incorrect": "<p><span>Incorrect.</span> Read up on <a target='_blank' href='http://html5doctor.com/element-index/#h'>heading elements</a> to learn more.</p>"
        }
    ]
};
