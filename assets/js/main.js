gsap.registerPlugin(ScrollTrigger);

(() => {

    document.addEventListener('DOMContentLoaded', () => {
        // MAIN LOGO ANIMATION
        gsap.from(document.querySelector('#main .logo img'), {
            scrollTrigger: {
                trigger: '#main',
                toggleActions: 'play none none none',
            },
            right: '100%',
            duration: 1.2,
            ease: 'easeInOut',
        });
        // END MAIN LOGO ANIMATION

        // SLOGAN ANIMATION
        gsap.from(document.querySelector('#slogan h1'), {
            scrollTrigger: {
                trigger: '#slogan h1',
                toggleActions: 'play none none reset',
            },
            duration: 1,
            clipPath: 'inset(0% 50%)',
            ease: 'easeInOut',
        });
        // END SLOGAN ANIMATION

        // INFORMATION ANIMATION
        const tlContent = gsap.timeline({
            scrollTrigger: {
                trigger: '#information',
                start: 'top',
                end: '2000px',
                scrub: 1,
                pin: true,
                // onEnter: () => {
                //     gsap.fromTo('#information .decorator', {
                //         y: '-100vh',
                //     },
                //         {
                //             y: '-100%',
                //         });
                // },
                // onLeaveBack: () => {
                //     gsap.fromTo('#information .decorator', {
                //         y: '-100%',
                //     },
                //         {
                //             y: '-100vh',
                //         });
                // },
            }
        }),
            tlDecorator = gsap.timeline({
                scrollTrigger: {
                    trigger: '#information .content',
                    start: 'top',
                    end: '2000px',
                    scrub: 1,
                    // pin: true,
                }
            });

        tlContent.from('#information .text', {
            y: 20,
            autoAlpha: 0,
            stagger: 2,
        }, 0)
            .to('#information .text', {
                y: 0,
                autoAlpha: 0,
                stagger: 2,
            }, 1);

        tlDecorator.from('#information .decorator', {
            y: '-100%',
            stagger: 2,
        })
            .to('#information .decorator', {
                y: '100%',
                stagger: 2,
            });
        // END INFORMATION ANIMATION
    });
})();