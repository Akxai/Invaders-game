# Space Invaders Game

Space Invaders is a classic arcade game that was first released in 1978. The game involves controlling a spaceship to defeat waves of alien invaders. The player's objective is to shoot down the aliens before they reach the bottom of the screen.

## Files and Functionality

### `Player.js`

This file defines the `Player` class, which represents the user-controlled spaceship. Here are the key functionalities:

- **Movement:** The spaceship can move left, right, up, and down.
- **Shooting Bullets:** The spaceship can shoot bullets to eliminate alien invaders.
- **Game State:** Tracks the player's lives, score, and game level.
- **Upgrades:** Upgrades the spaceship's appearance and capabilities.
- **Respawn:** Handles the respawn of the player's spaceship.
- **Pause and Resume:** Implements pausing and resuming the game.
- **Drawing Methods:** Draws the player's spaceship, bullets, lives, and game information.

### `PlayerBullet.js`

This file defines the `PlayerBullet` class, representing bullets shot by the player's spaceship. Key functionalities include updating the bullet's position and checking if it has moved off-screen.

### `Sketch.js`

This file contains the main game logic and setup. Key components and functionalities include:

- **Loading Images:** Preloads images for the alien invaders, player spaceship, and upgraded spaceship.
- **Setup Function:** Initializes the game canvas, creates instances of the `Invaders` and `Player` classes, and generates space debris.
- **Draw Function:** Updates and draws game elements, handles game over scenarios, and checks for NFT conditions.
- **Resume Function:** Resumes the game after pausing due to NFT conditions.
- **User Interface:** Displays player information, lives, and game score.
- **Additional Functionalities:** Describes Level 3 and Level 4 upgrades and the upgraded spaceship.

### `Alien.js`

This file defines the `Alien` class, representing individual alien invaders. Key functionalities include:

- **Initialization:** Sets up alien properties such as position, size, and image.
- **Update and Draw:** Updates the alien's position and draws it on the canvas.
- **Collision Detection:** Checks for collisions with player bullets.

### `AlienBullet.js`

This file defines the `AlienBullet` class, representing bullets shot by alien invaders. Key functionalities include updating the bullet's position, checking if it has moved off-screen, and detecting collisions with the player.

### `Bullet.js`

This file defines the `Bullet` class, which serves as the base class for both player and alien bullets. It includes properties and methods common to both types of bullets.

### `Debris.js`

This file defines the `Debris` class, representing space debris objects. Key functionalities include updating and displaying debris and checking for collisions with the player.

### `Invaders.js`

This file defines the `Invaders` class, managing a collection of alien invaders. It includes methods for updating and drawing the aliens, checking collisions, and advancing game levels.

### `NFT.js`

This file defines NFT-related functionalities, such as showing NFTs, updating game state based on NFT conditions, and pausing the game.

### `SpaceshipUpgrade.js`

This file defines methods for upgrading the player's spaceship in different levels.

### `UserAuthentication.js`

This file contains functions related to user authentication, including connecting to the game after successful authentication.

### `index.html`

This HTML file includes the structure for the game canvas and buttons, providing a visual interface for the game.

### `style.css`

The CSS file styles the HTML elements, enhancing the visual presentation of the game.


## Extras that I have added

### `Level 3 and Level 4`

In Level 3, the player's spaceship gains the ability to shoot three bullets simultaneously, providing a tactical advantage. In Level 4, the game introduces further enhancements:

- **Bullet Upgrade:** The player can now shoot four bullets at once, increasing firepower.
- **Lives Upgrade:** The player receives an additional five lives, increasing survivability.
- **Upgraded Spaceship (STACKUP):** The appearance of the spaceship is upgraded to a STACKUP Spaceship, signifying advanced capabilities.

These additions add depth and complexity to the Space Invaders game, offering players a more challenging and engaging experience.
