<?php /* header.php - call with require_once at top of all PHP pages */ ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GameVault</title>
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
</head>
<body>
  <nav class="header-nav">
    <a class="header-logo" href="index.php">GameVault</a>
    <div class="header-nav-links">
      <a href="index.php">Home</a>
      <a href="category.php">Categories</a>
      <a href="consoles.php">Consoles</a>
    </div>
    <form class="header-search" action="search.php" method="get" autocomplete="off">
      <input type="text" name="q" placeholder="Search games..." aria-label="Search">
      <button type="submit" style="display:none"></button>
      <i class="bi bi-search"></i>
    </form>
  </nav>
