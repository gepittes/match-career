export const AnimateContainer = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
}

export const AnimateContainerXR = {
    initial: { opacity: 0, x: 100 },
    whileInView: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
}

export const AnimateImage = {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5 },
    transition: { duration: .6, delay: .5 }
}

export const AnimateButton = {
    transition: { duration: .6, delay: .6 }
}
export const AnimateButton2 = {
    transition: { duration: .6, delay: .9 }
}

export const AnimateSpan = {
    transition: { duration: .5, delay: .3 }
}
export const AnimateTitle = {
    transition: { duration: .6, delay: .4 }
}
export const AnimateTitle2 = {
    transition: { duration: .4, delay: .4 }
}
export const AnimateP = {
    transition: { duration: .7, delay: .5 }
}

export const TitleY = {
    initial: { opacity: 0, y: 100 },
    whileInView: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 100 },
}

export const AnimateListItem = {
  initial: { opacity: 0, y: 100 },
  whileInView: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
  transition: { duration: .7 } 
};

