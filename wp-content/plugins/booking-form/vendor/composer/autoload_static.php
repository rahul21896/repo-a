<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitc25f97112cebf02f3c10f1ecb4971be6
{
    public static $prefixLengthsPsr4 = array (
        'R' => 
        array (
            'Rahuldhamecha\\BookingForm\\' => 26,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Rahuldhamecha\\BookingForm\\' => 
        array (
            0 => __DIR__ . '/../..' . '/includes',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitc25f97112cebf02f3c10f1ecb4971be6::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitc25f97112cebf02f3c10f1ecb4971be6::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitc25f97112cebf02f3c10f1ecb4971be6::$classMap;

        }, null, ClassLoader::class);
    }
}