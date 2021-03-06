<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit3fb7338da0dc84a187dd9c3a27e12b48
{
    public static $prefixLengthsPsr4 = array (
        'D' => 
        array (
            'DisableLazyLoad\\' => 16,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'DisableLazyLoad\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'DisableLazyLoad\\Core\\Settings' => __DIR__ . '/../..' . '/src/Core/Settings.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit3fb7338da0dc84a187dd9c3a27e12b48::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit3fb7338da0dc84a187dd9c3a27e12b48::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit3fb7338da0dc84a187dd9c3a27e12b48::$classMap;

        }, null, ClassLoader::class);
    }
}
