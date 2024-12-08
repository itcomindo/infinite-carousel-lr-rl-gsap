function infiniteHorizontalCarouselLR() {
    var $groupsContainer = jQuery('.groups.lr'); // Container
    var $groupItemsWrapper = jQuery('.items.lr'); // Grup carousel
    var groupWidth = $groupItemsWrapper.outerWidth(true); // Lebar satu grup

    // Clone elemen untuk membuat efek seamless
    $groupItemsWrapper.clone().appendTo($groupsContainer);
    $groupItemsWrapper.clone().prependTo($groupsContainer); // Tambahkan ke depan untuk mengisi gap ke kanan

    // Atur posisi awal container agar mulai dari posisi elemen tengah
    gsap.set($groupsContainer, { x: -groupWidth });

    // Animasi GSAP
    gsap.to($groupsContainer, {
        x: '+=' + groupWidth, // Pindahkan ke kanan
        duration: 40, // Durasi animasi
        ease: "linear",
        repeat: -1,
        onRepeat: function () {
            // Pindahkan elemen terakhir ke awal sebelum animasi mengulang
            $groupsContainer.prepend($groupsContainer.children().last());
            gsap.set($groupsContainer, { x: -groupWidth }); // Reset posisi ke awal
        },
    });
}
infiniteHorizontalCarouselLR();