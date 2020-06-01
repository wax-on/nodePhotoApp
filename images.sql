-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Värd: 127.0.0.1
-- Tid vid skapande: 01 jun 2020 kl 19:53
-- Serverversion: 8.0.18
-- PHP-version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databas: `images`
--

-- --------------------------------------------------------

--
-- Tabellstruktur `albums`
--

CREATE TABLE `albums` (
  `id` int(11) NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumpning av Data i tabell `albums`
--

INSERT INTO `albums` (`id`, `title`, `user_id`) VALUES
(19, 'Skate', 20),
(20, 'Music', 21),
(21, 'Dreaming', 22);

-- --------------------------------------------------------

--
-- Tabellstruktur `albums_photos`
--

CREATE TABLE `albums_photos` (
  `album_id` int(11) NOT NULL,
  `photo_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumpning av Data i tabell `albums_photos`
--

INSERT INTO `albums_photos` (`album_id`, `photo_id`) VALUES
(19, 100),
(19, 101),
(19, 102),
(20, 103),
(20, 104),
(20, 105),
(21, 106),
(21, 107),
(21, 108);

-- --------------------------------------------------------

--
-- Tabellstruktur `albums_users`
--

CREATE TABLE `albums_users` (
  `id` int(11) NOT NULL,
  `album_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumpning av Data i tabell `albums_users`
--

INSERT INTO `albums_users` (`id`, `album_id`, `user_id`) VALUES
(17, 19, 20),
(18, 20, 21),
(19, 21, 22);

-- --------------------------------------------------------

--
-- Tabellstruktur `photos`
--

CREATE TABLE `photos` (
  `id` int(11) NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `comment` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `url` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumpning av Data i tabell `photos`
--

INSERT INTO `photos` (`id`, `title`, `comment`, `url`, `user_id`) VALUES
(100, 'Bowl', 'This is a nice skateBowl', 'https://images.unsplash.com/photo-1520796738119-1bae68104970?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=584&q=80', 20),
(101, 'Venice skate Park', 'This is the world famous venice skate park!', 'https://images.unsplash.com/photo-1496885950879-f0bb5768d2a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80', 20),
(102, 'Life is too short for longboard', 'Like the title', 'https://images.unsplash.com/photo-1461114309724-295d0a070cea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80', 20),
(103, 'Dream Studio', 'This is my dream studio', 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60', 21),
(104, 'Dream guitar', 'This is my dream guitar', 'https://images.unsplash.com/photo-1561777848-6a56e08d6a26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60', 21),
(105, 'MUSIC', 'Music to my Eyes', 'https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80', 21),
(106, 'Me wanting waves', 'Miss this moments', 'https://images.unsplash.com/photo-1505937059382-aab581fd88c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60', 22),
(107, 'My life', 'Some one took a Pic of my new ride', 'https://images.unsplash.com/photo-1471194494705-149b8e5f9a24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60', 22),
(108, 'This is what i want right now!!! <3', 'Miss this place', 'https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60', 22);

-- --------------------------------------------------------

--
-- Tabellstruktur `photos_users`
--

CREATE TABLE `photos_users` (
  `id` int(11) NOT NULL,
  `photo_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumpning av Data i tabell `photos_users`
--

INSERT INTO `photos_users` (`id`, `photo_id`, `user_id`) VALUES
(35, 100, 20),
(36, 101, 20),
(37, 102, 20),
(38, 103, 21),
(39, 104, 21),
(40, 105, 21),
(41, 106, 22),
(42, 107, 22),
(43, 108, 22);

-- --------------------------------------------------------

--
-- Tabellstruktur `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `first_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumpning av Data i tabell `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `first_name`, `last_name`, `email`) VALUES
(20, 'Hugo', '$2b$10$7PziNI5aNC4VRJUJ0EAGOuhHpnquKFCZCmsfJN7f7Bmcpaj0ORj0O', 'Hugo', 'Johansson', 'hugo.johansson@gmail.com'),
(21, 'The_hive', '$2b$10$46G4Sa8.6CbvFmcbNrXTLuRbXoaCNoKTUqSAefFCKjjHg7Dr65/IG', 'Karl', 'Svensson', 'the_hive@gmail.com'),
(22, 'surfer2020', '$2b$10$InfVu213DAyVszl4yHELa.LF6faWhn0jerGmkbJTFZ110rnavabXC', 'Lisa', 'Larsson', 'lisa-larsson@gmail.com');

--
-- Index för dumpade tabeller
--

--
-- Index för tabell `albums`
--
ALTER TABLE `albums`
  ADD PRIMARY KEY (`id`);

--
-- Index för tabell `albums_users`
--
ALTER TABLE `albums_users`
  ADD PRIMARY KEY (`id`);

--
-- Index för tabell `photos`
--
ALTER TABLE `photos`
  ADD PRIMARY KEY (`id`);

--
-- Index för tabell `photos_users`
--
ALTER TABLE `photos_users`
  ADD PRIMARY KEY (`id`);

--
-- Index för tabell `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT för dumpade tabeller
--

--
-- AUTO_INCREMENT för tabell `albums`
--
ALTER TABLE `albums`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT för tabell `albums_users`
--
ALTER TABLE `albums_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT för tabell `photos`
--
ALTER TABLE `photos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=109;

--
-- AUTO_INCREMENT för tabell `photos_users`
--
ALTER TABLE `photos_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT för tabell `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
