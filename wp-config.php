<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'free-hit' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'killer' );

/** Database hostname */
define( 'DB_HOST', 'localhost:3307' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'ss4e5vZw#L>u@4OWB_4xx`t;XKa1pTl V+D{x*H,N*(L;u54X^Q+ L:c_RDudf w' );
define( 'SECURE_AUTH_KEY',  'm(/G?I:*(b+QU#[3K&}_1(W.U:1.`sI;YtbU}wp9y7DZp#wSdZ@CbF=-QL2:Mu6S' );
define( 'LOGGED_IN_KEY',    'CxI(+.d*t*E%mcFnu?: v.UN@]p/x*W&0C?IYjfD*!OpWEi&rS23WsFv1SFS7Q?>' );
define( 'NONCE_KEY',        '|wVJC^?OlR!C_gnwGal^QJjD&3[hGtE5P9!U*cq(%=+B-yJU0V9VIH@~,5B}Ru}]' );
define( 'AUTH_SALT',        'XYOr@P4Wv!RtglvanK(^e1a#6foR/X2x;S}Q5C._L4=1E8=mRS10,%#kX.fmh/?%' );
define( 'SECURE_AUTH_SALT', 'b~|$?_e[dyE!uD+awL)Y8#7rpE14r&.+:v;,D52p8BuieAzMzsAezdp*>g^^|&G(' );
define( 'LOGGED_IN_SALT',   'xgoh~bHrOA2>[.=Pf6[Lx|30Muhf-~=+AvqJ~B;6Z6DdCl ^^3{C|?( 69GN+fje' );
define( 'NONCE_SALT',       '%_hJ(19gX{dPB|5eP$wx jKe_!mh :Ykl>6#p5qTJ3 k),xz#KYFZ[t4)|S@[yWc' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
