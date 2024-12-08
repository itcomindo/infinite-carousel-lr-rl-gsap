function infiniteHorizontalCarouselRL() {
    var $groupsContainer = jQuery('#group-1'); // Container
    var $groupItemsWrapper = jQuery('.items'); // Grup carousel
    var groupWidth = $groupItemsWrapper.outerWidth(true); // Lebar satu grup

    console.log('groupWidth', groupWidth);

    // Clone elemen untuk membuat efek seamless
    $groupItemsWrapper.clone().appendTo($groupsContainer);
    $groupItemsWrapper.clone().prependTo($groupsContainer); // Tambahkan ke depan untuk mengisi gap ke kiri

    // Atur posisi awal container agar mulai dari posisi elemen tengah
    gsap.set($groupsContainer, { x: 0 });

    // Animasi GSAP
    gsap.to($groupsContainer, {
        x: '-=' + groupWidth, // Pindahkan ke kiri
        duration: 10, // Durasi animasi
        ease: "linear",
        repeat: -1,
        onRepeat: function () {
            // Pindahkan elemen pertama ke belakang sebelum animasi mengulang
            $groupsContainer.append($groupsContainer.children().first());
            gsap.set($groupsContainer, { x: 0 }); // Reset posisi ke awal
        },
    });
}
infiniteHorizontalCarouselRL();