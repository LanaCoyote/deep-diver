#Deep Diver
Deep Diver is a 2D side-scrolling exploration game where you sail the ocean diving for treasure while you avoid enemies.

##Game States
 - Sailing: The player starts on their boat which can move horizontally across the ocean surface using the left and right arrow keys. The player is invulnerable while on their boat. By pressing the space bar, the player dives from their boat and into the water.
 - Diving: While diving, the player can move in 8 directions with the arrow keys. The player has an oxygen meter that depletes while underwater. The player cannot swim past the surface of the water, but does not lose oxygen while on the surface. The player can return to their boat by touching it, which refills their oxygen and deposits any treasure they're holding. Enemies that touch the player underwater cause them to lose oxygen.
 - Dead/Game Over: If the player runs out of oxygen while they're underwater, they lose.

##Controls
 - Arrow Keys: While sailing, the left and right arrow keys move the player left and right. While diving, the arrow keys move the player around in the water.
 - Spacebar: While sailing, pressing the spacebar will dive. While diving, pressing the spacebar will pick up or drop treasure.

##Game Objects
 - Boat: The player's boat. If the player touches this while diving they will return to the sailing state.
 - Diver: The player while underwater. The diver can pick up treasure and enemies will chase them.
 - Shark: Sharks are enemies that will home in on the player if nearby.
 - Treasure Chest: Can be picked up. If brought back to te boat by the diver, the player scores points. Being hit by a shark will cause the diver to drop their treasure chest.

##Wishlist
 [ ] Procedural level generation (for seabed and enemies)
 [ ] Motherlode-esque upgrade system (spend points for bigger oxygen tank, weapons, etc.)
 [ ] More enemies and things to find (magic artifacts?)
 [ ] Sailing hazards (storms, pirates)
