function infiniteHorizontalCarouselRL() {
    var $groupsContainer = jQuery('.groups.rl'); // Container
    var $groupItemsWrapper = jQuery('.items.rl'); // Grup carousel
    var groupWidth = $groupItemsWrapper.outerWidth(true); // Lebar satu grup


    $groupItemsWrapper.clone().appendTo($groupsContainer);
    $groupItemsWrapper.clone().prependTo($groupsContainer);

    //watch code below this fucking shit!!!
    gsap.set($groupsContainer, { x: 0 });

    // Animasi GSAP
    gsap.to($groupsContainer, {
        x: '-=' + groupWidth, // Pindahkan ke kiri
        duration: 60, // Durasi animasi
        ease: "linear",
        repeat: -1,
        onRepeat: function () {
            // Pindahkan elemen pertama ke belakang sebelum animasi mengulang
            // $groupsContainer.append($groupsContainer.children().first());
            $groupsContainer.append($groupsContainer.children().last());
            // $groupsContainer.append($groupsContainer.children().first());
            gsap.set($groupsContainer, { x: +groupWidth }); // Reset posisi ke awal
        },
    });
}
infiniteHorizontalCarouselRL();