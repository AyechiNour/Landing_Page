export const cardAnimation = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeInOut" } },
    hidden: { opacity: 0, scale: 0 }
}
export const fadeInUp = {
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            ease: "easeInOut"
        }
    },
    hidden: {
        y: 40,
        opacity: 0,
    }
}
export const fadeInDown = {
    initial: {
        y: -60,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
    }
}
export const rotation = {
    animate: {
        rotate: 360,
        transition: {
            duration: 0.8,
            ease: "easeInOut"
        }
    }
}
export const scale = {
    initial: {
        scale: 0.5,
    },
    animate: {
        scale: 1,
        transition: {
            duration: 0.8,
            ease: "easeInOut"
        }
    }
}
export const transition = {
    initial: {
        x: -100
    },
    animate: {
        x: 0,
    }
}
export const transition_ = {
    initial: {
        x: 300
    },
    animate: {
        x: 0,
    }
}
export const opacity = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.2,
            ease: "easeInOut"
        }
    }
}
export const opacity_1 = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeInOut"
        }
    }
}
export const opacity_2 = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "easeInOut"
        }
    }
}
export const opacity_3 = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1.2,
            ease: "easeInOut"
        }
    }
}
export const opacity_4 = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1.4,
            ease: "easeInOut"
        }
    }
}
export const opacity_5 = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 2.5,
            ease: "easeInOut"
        }
    }
}