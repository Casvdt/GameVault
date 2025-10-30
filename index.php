<?php require_once 'header.php'; require_once 'games.php'; ?>
<main>
  <div class="hero">
    <div class="hero-main">Discover Incredible Games</div>
    <div class="hero-desc">Explore trending titles, new releases, and indie gems. Upgrade your next adventure, one vault at a time.</div>
  </div>
  <section class="games-grid">
<?php foreach ($games as $game): ?>
    <div class="col-12 col-sm-6 col-lg-3">
      <div class="card game-tile h-100" tabindex="0" onclick="location.href='game.php?slug=<?=urlencode($game['slug'])?>'">
        <img class="card-img-top" src="<?=htmlspecialchars($game['image'])?>" alt="<?=htmlspecialchars($game['title'])?>">
        <div class="card-body"><h5 class="card-title"><?=htmlspecialchars($game['title'])?></h5></div>
      </div>
    </div>
<?php endforeach; ?>
  </section>
</main>
<?php require_once 'footer.php'; ?>
