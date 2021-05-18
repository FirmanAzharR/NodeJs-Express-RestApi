-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 18, 2021 at 10:50 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 7.4.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test-nodejs`
--

-- --------------------------------------------------------

--
-- Table structure for table `barang`
--

CREATE TABLE `barang` (
  `id_barang` int(11) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `harga_beli` int(11) NOT NULL,
  `harga_jual` int(11) NOT NULL,
  `stok` int(11) NOT NULL,
  `foto` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `barang`
--

INSERT INTO `barang` (`id_barang`, `nama`, `harga_beli`, `harga_jual`, `stok`, `foto`) VALUES
(7, 'Mouse', 110000, 120000, 10, '2021-05-18T00-27-05.730Zmouse.jpg'),
(8, 'MousePad RGB', 80000, 100000, 20, '2021-05-18T00-29-27.657Zmousepad.jpg'),
(9, 'Stick x-box 360 PC', 120000, 150000, 10, '2021-05-18T00-33-27.688Zxboxk stick.jpg'),
(10, 'Speaker RGB', 125000, 150000, 20, '2021-05-18T00-37-37.416Zspeaker.jpg'),
(11, 'Keyboard Gaming RGB', 130000, 150000, 20, '2021-05-18T00-40-24.988Zkeyboard.jpg'),
(12, 'Headphone Gaming', 180000, 200000, 10, '2021-05-18T00-43-09.435Zheadphone.jpg'),
(13, 'Headset Superbass', 75000, 90000, 70, '2021-05-18T00-43-35.502Zheadset.jpg'),
(14, 'Cooler Laptop', 80000, 100000, 15, '2021-05-18T00-52-22.499Zcoller2.jpg'),
(15, 'Speaker Bluetooth Mini', 50000, 60000, 10, '2021-05-18T00-52-49.038Zspeakermini.jpg'),
(16, 'Mouse Ironman black', 85000, 120000, 5, '2021-05-18T00-53-21.256Zmouse iron.jpg'),
(17, 'Garskin Laptop', 50000, 70000, 10, '2021-05-18T00-57-28.651Zgarskin-min.jpg'),
(18, 'Keyboard Silicon', 20000, 30000, 10, '2021-05-18T01-01-30.668Zprotec-min.jpg'),
(19, 'Vacum Cooler Laptop', 75000, 100000, 20, '2021-05-18T01-05-57.223Zvacum.jpg'),
(20, 'Helm Transformer Robot', 1500000, 1700000, 90, '2021-05-18T08-22-23.792Ztrn.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(200) NOT NULL,
  `user_email` varchar(100) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_email`, `user_password`, `user_role`) VALUES
(2, 'admin', 'admin@gmail.com', '$2b$10$VmFNAxjfFmvczTxXGby83e8qeH881BxLg044jM3vZRnWiSOWUbtCW', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `barang`
--
ALTER TABLE `barang`
  ADD PRIMARY KEY (`id_barang`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `barang`
--
ALTER TABLE `barang`
  MODIFY `id_barang` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
