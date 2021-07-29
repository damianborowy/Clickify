const code1 = `<!DOCTYPE html>
<html>
<body>

<h1>My First Heading</h1>

<p>My first paragraph.</p>

</body>
</html>`;

const code2 = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Web site created using create-react-app" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <link rel="stylesheet" href="%PUBLIC_URL%/normalize.css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <title>React App</title>
</head>

<body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
</body>

</html>`;

const code3 = `<!DOCTYPE html>
<section>
    <h2 class="portfolio_header">Portfolio</h2>
    <div class="portfolio">
        <div class="quick-notes">
            <div class="overlay">
                <h2>Quick Notes</h2>
                <div class="overlay_buttons_group">
                    <a class="overlay_button" href="https://quick-notes.surge.sh/">
                        Demo
                    </a>
                    <a class="overlay_button" href="https://github.com/GustawTanski/quick-notes">
                        More
                    </a>
                </div>
            </div>
        </div>
        <div class="supreme-potato">
            <div class="overlay">
                <h2>Supreme Potato</h2>
                <div class="overlay_buttons_group">
                    <a class="overlay_button" href="https://supreme-potato.surge.sh">
                        Demo
                    </a>
                    <a class="overlay_button" href="https://github.com/GustawTanski/supreme-potato">
                        More
                    </a>
                </div>
            </div>
        </div>
        <div class="automatic-octo-spoon">
            <div class="overlay">
                <h2>Automatic Octo Spoon</h2>
                <a class="overlay_button" href="https://github.com/GustawTanski/automatic-octo-spoon">
                    More
                </a>
            </div>
        </div>
        <div class="weatherbunny">
            <div class="overlay">
                <h2>Weatherbunny</h2>
                <a class="overlay_button" href="https://github.com/jtmcoderscamp/weatherbunny">
                    More
                </a>
            </div>
        </div>
        <div class="chess">
            <div class="overlay">
                <h2>Chess</h2>
                <a class="overlay_button" href="https://github.com/GustawTanski/ChessCodersCamp">
                    More
                </a>
            </div>
        </div>
        <div class="codewars">
            <div class="overlay">
                <h2>Codewars</h2>
                <a class="overlay_button" href="https://github.com/damianborowy/Codewars">
                    More
                </a>
            </div>
        </div>
        <div class="dignclick">
            <div class="overlay">
                <h2>Dig 'n Click</h2>
                <a class="overlay_button" href="https://github.com/damianborowy/Dig-n-Click">
                    More
                </a>
            </div>
        </div>
    </div>
</section>`;

const htmlCode = [code1, code2, code3];

export default htmlCode;
