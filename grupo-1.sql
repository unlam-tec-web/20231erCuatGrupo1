-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-07-2023 a las 06:58:20
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `grupo-1`
--

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id`, `descripcion`, `imagen`) VALUES
(1, 'Monitores', 'monitor.png'),
(3, 'Placa de video', 'placa de video.png'),
(4, 'Mouse', 'mouse.png'),
(7, 'teclados', 'teclado.png'),
(8, 'auriculares', 'auricular.png'),
(11, 'Gabinetes', 'gabinete.png');

--
-- Volcado de datos para la tabla `imagen`
--

INSERT INTO `imagen` (`id`, `fecha_carga`, `fecha_eliminacion`, `isEliminado`, `nombre`, `ubicacion`) VALUES
(1, '2023-07-07 22:42:38', NULL, 0, 'auricular-1688780558270.png', '/home/rinaldi_s/Documentos/Apuntes/TP/20231erCuatGrupo1/BACK/src/public/img'),
(2, '2023-07-08 00:49:49', NULL, 0, '998497-MLA50183281762_062022-F-1688788189239.jpg', '/home/rinaldi_s/Documentos/Apuntes/TP/20231erCuatGrupo1/BACK/src/public/img'),
(3, '2023-07-08 00:54:06', NULL, 0, '952002-MLA69962688614_062023-F-1688788446730.jpg', '/home/rinaldi_s/Documentos/Apuntes/TP/20231erCuatGrupo1/BACK/src/public/img'),
(4, '2023-07-08 00:58:30', NULL, 0, '878854-MLA51043367748_082022-F-1688788710037.jpg', '/home/rinaldi_s/Documentos/Apuntes/TP/20231erCuatGrupo1/BACK/src/public/img'),
(5, '2023-07-08 01:01:34', NULL, 0, '736179-MLA50031011517_052022-F-1688788894414.jpg', '/home/rinaldi_s/Documentos/Apuntes/TP/20231erCuatGrupo1/BACK/src/public/img'),
(6, '2023-07-08 01:20:03', NULL, 0, 'compragamer_Imganen_general_34475_Fuente_Cooler_Master_750W_80_Plus_Bronze_MWE_7cbd1342-grn-1688790003030.jpg', '/home/rinaldi_s/Documentos/Apuntes/TP/20231erCuatGrupo1/BACK/src/public/img'),
(7, '2023-07-08 01:21:36', NULL, 0, '807581-MLA44434412331_122020-F-1688790096317.jpg', '/home/rinaldi_s/Documentos/Apuntes/TP/20231erCuatGrupo1/BACK/src/public/img'),
(8, '2023-07-08 01:22:55', NULL, 0, '877620-MLA54273442928_032023-F-1688790175034.jpg', '/home/rinaldi_s/Documentos/Apuntes/TP/20231erCuatGrupo1/BACK/src/public/img'),
(9, '2023-07-08 01:24:46', NULL, 0, '845096-MLA53383088675_012023-F-1688790286691.jpg', '/home/rinaldi_s/Documentos/Apuntes/TP/20231erCuatGrupo1/BACK/src/public/img'),
(10, '2023-07-08 01:27:26', NULL, 0, 'compragamer_Imganen_general_18521_Gabinete_Corsair_Crystal_680X_RGB_TG_Smart_White_91c31650-grn-1688790446643.jpg', '/home/rinaldi_s/Documentos/Apuntes/TP/20231erCuatGrupo1/BACK/src/public/img');

--
-- Volcado de datos para la tabla `marca`
--

INSERT INTO `marca` (`id`, `descripcion`, `imagen`) VALUES
(1, 'Redragon', 'redragon.jpg'),
(3, 'Vsg', 'vsg.jpg'),
(4, 'Razer', 'razer.jpg'),
(7, 'T-dagger', 't-dagger.jpg'),
(8, 'Logitech', 'logitech.jpg');

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id`, `nombre`, `precio`, `clasificacion`, `descripcion`, `marca`, `imagen`, `stock`) VALUES
(14, 'Micro Procesador Amd Ryzen 5 4600g 4.2ghz Am4', 110399, 'procesador', 'ESPECIFICACIONES\r\n# de núcleos de CPU: 6\r\n# de hilos: 12\r\nReloj base: 3.7GHz\r\nReloj de aumento máx. : Hasta 4.2GHz\r\nCaché L2 total: 3MB\r\nCaché L3 total: 8MB\r\nDesbloqueados: Sí\r\nPackage: AM4\r\nVersión de PCI Express: PCIe 3.0\r\nSolución térmica (PIB): Wraith', 'AMD', 'http://localhost:3000/img/998497-MLA50183281762_062022-F-1688788189239.jpg', NULL),
(15, 'Mother Gigabyte B550 Aorus Elite V2 Amd Am4 ', 143799, 'mother', 'CARACTERÍSTICAS\r\n- Admite procesadores AMD Ryzen™ 5000 Series/ Ryzen™ 5000 G-Series/ Ryzen™ 4000 G-Series y Ryzen™ 3000 Series\r\n- DDR4 sin búfer ECC/no ECC de dos canales, 4 DIMM\r\n- Diseño de energía gemelo digital de 12+2 fases con 50A DrMOS\r\n', 'Gigabyte', 'http://localhost:3000/img/952002-MLA69962688614_062023-F-1688788446730.jpg', NULL),
(17, 'Memoria Corsair 8gb Ddr4 3200mhz Vengeance Rgb ', 22499, 'memoria ram', 'ESPECIFICACIONES\r\nVentilador incluido No\r\nSerie de memoria VENGEANCE RGB PRO\r\nTipo de memoria DDR4\r\nTamaño de la memoria Kit de 8 GB (1 x 8 GB)\r\nLatencia probada 16-20-20-38\r\nVoltaje probado 1.35V\r\nVelocidad probada 3200MHz\r\nColor de memoria NEGRO', 'Corsair', 'http://localhost:3000/img/736179-MLA50031011517_052022-F-1688788894414.jpg', NULL),
(18, 'Fuente Cooler Master 750W 80 Plus Bronze MWE', 58221, 'fuente', 'Con la fuente de alimentación Cooler Master Technology MPE-7501-ACAAB podrás asegurar la corriente continua y estable de tu computadora de escritorio y optimizar el funcionamiento de sus componentes.\r\n', 'Cooler Master', 'http://localhost:3000/img/compragamer_Imganen_general_34475_Fuente_Cooler_Master_750W_80_Plus_Bronze_MWE_7cbd1342-grn-1688790003030.jpg', NULL),
(19, 'Micro Procesador Intel Core I3 10100f 4.3ghz 1200 ', 64999, 'procesador', 'PROCESADOR INTEL® CORE™ I3-10100F\r\ncaché de 6 M, hasta 4,30 GHz\r\n\r\nESENCIAL\r\nNombre de código: Productos anteriormente Comet Lake\r\nSegmento vertical: Desktop\r\nNúmero de procesador: i3-10100F\r\n\r\nESPECIFICACIONES SOBRE RENDIMIENTO\r\nCantidad de núcleos: 4\r\n', 'Intel', 'http://localhost:3000/img/807581-MLA44434412331_122020-F-1688790096317.jpg', NULL),
(20, 'Mother Asus Tuf B450m-plus Ii Gaming Amd Am4', 84899, 'mother', 'CARACTERÍSTICAS\r\n- AMD Ryzen 5000 Desktop Ready\r\n- Refrigeración completa: Disipadores VRM, disipador PCH y Fan Xpert 2+.\r\n- Conectividad Next-gen: Compatibilidad con USB 3.2 Gen 2 Type-A.\r\n', 'ASUS', 'http://localhost:3000/img/877620-MLA54273442928_032023-F-1688790175034.jpg', NULL),
(22, 'Gabinete Corsair Crystal 680X RGB TG Smart White', 251336, 'gabinete', '', 'Corsair', 'http://localhost:3000/img/compragamer_Imganen_general_18521_Gabinete_Corsair_Crystal_680X_RGB_TG_Smart_White_91c31650-grn-1688790446643.jpg', NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
