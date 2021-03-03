import React from 'react';
//animations
import { motion } from 'framer-motion';

export const pageVariants = {
  initial: {
    // opacity: 0,
    // height: '100vh',
    // bottom: 0,
    // x: 300,
    y: 300
  },
  animate: {
    // x: 0,
    y: 0,
    // opacity: 1
    // height: 0,
    // transition: {
    //   duration: 1.5,
    //   ease: [0.87, 0, 0.13, 1],
    // },
  },
  in: {
    // x: 0,
    y: 0,
    // opacity: 1,
    // height: 0,
    transition: {
      duration: 1,
      ease: [0.87, 0, 0.13, 1],
    },
  },
  out: {
    x:300,
    // y: 300,
    // opacity: 0,
  }
};


export const leftPageVariants = {
  initial: {
    // opacity: 0,
    // height: '100vh',
    // bottom: 0,
    // x: 300,
    y: -300
  },
  animate: {
    // x: 0,
    y: 0,
    // opacity: 1
    // height: 0,
    // transition: {
    //   duration: 1.5,
    //   ease: [0.87, 0, 0.13, 1],
    // },
  },
  in: {
    // x: 0,
    y: 0,
    // opacity: 1,
    // height: 0,
    transition: {
      duration: 0.75,
      ease: [0.87, 0, 0.13, 1],
    },
  },
  out: {
    // x: 300,
    y: -300,
    // opacity: 0,
  }
};


const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.5,
      when: "afterChildren",
    },
  },
};

const text = {
  initial: {
    y: 40,
  },
  animate: {
    y: 80,
    transition: {
      duration: 2,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};


export const BlackBoxTransition = () => {
  // Scroll user to top to avoid showing the footer
  React.useState(() => {
    typeof windows !== "undefined" && window.scrollTo(0, 0);
  }, []);

  const blackBox = {
    initial: {
      height: "100vh",
      bottom: 0,
    },
    animate: {
      height: 0,
      transition: {
        when: "afterChildren",
        duration: 1,
        ease: [0.87, 0, 0.13, 1],
      },
    },
    out: {
      height: "100vh",
      bottom: 0,
    }
  };

  return (
    <div
    style={{position:'absolute', boxShadow:'inset 0', display:'flex',alignItems:'center',justifyContent:'center', width:'100%'}}
    >
      <motion.div
        style={{position:'relative',zIndex:'50',width:'100%',background:'#000'}}
        initial="initial"
        animate="animate"
        variants={blackBox}
        onAnimationStart={() => document.body.classList.add("overflow-hidden")}
        onAnimationComplete={() =>
          document.body.classList.remove("overflow-hidden")
        }
      >
      <motion.svg variants={textContainer} className="absolute z-50 flex" style={{position:'absolute',zIndex:'50',display:'flex',justifyContent:'center', alignItems:'center',textAlign:'center'}}>
        <pattern
          id="pattern"
          patternUnits="userSpaceOnUse"
          width={750}
          height={800}
          className="text-white"
          style={{color:'#fff'}}
        >
          <rect className="w-full h-full fill-current" style={{width:'100%',height:'100%', fill:'currentcolor'}} />
          <motion.rect
            variants={text}
            className="w-full h-full text-gray-600 fill-current"
            style={{width:'100%',height:'100%', color:'gray 600',fill:'currentcolor'}}
          />
        </pattern>
        <text
          className="text-4xl font-bold"
          textAnchor="middle"
          x="50%"
          y="50%"
          style={{ fill: "url(#pattern)",fontSize:"2.25rem",fontWeight:'bold',color:'#fff',  }}
        >
          {/**
           * Can add some text here in between page transitions <--
           * This needs to be centered in middle of page
           */}
          MW
        </text>
      </motion.svg>
    </motion.div>
    </div>
  )
}

export const BlueBoxTransition = () => {
  // Scroll user to top to avoid showing the footer
  React.useState(() => {
    typeof windows !== "undefined" && window.scrollTo(0, 0);
  }, []);

  const blueBox = {
    initial: {
      height: "100vh",
      top: 0,
      transition: {
        when: "afterChildren",
        duration: 1,
        ease: [0.87, 0, 0.13, 1],
      },
    },
    animate: {
      height: 0,
      transition: {
        when: "afterChildren",
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
    out: {
      height: "100vh",
      bottom: 0,
      transition: {
        when: "afterChildren",
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    }
  };


  return (
    <div
      style={{
        position:'absolute', 
        boxShadow:'inset 0', 
        display:'flex',
        alignItems:'center',
        justifyContent:'center', 
        width:'100%'
      }}
    >
      <motion.div
        style={{
          position:'relative',
          zIndex:'50',width:'100%',
          background:'#11b'
        }}
        initial="initial"
        animate="animate"
        variants={blueBox}
        onAnimationStart={() => document.body.classList.add("overflow-hidden")}
        onAnimationComplete={() =>
          document.body.classList.remove("overflow-hidden")
        }
      />
    </div>
  )
}

export const WhiteBoxDownTransition = () => {
  // Scroll user to top to avoid showing the footer
  React.useState(() => {
    typeof windows !== "undefined" && window.scrollTo(0, 0);
  }, []);

  const whiteBox = {
    initial: {
      height: "100vh",
      right: 0,
    },
    animate: {
      height: 0,
      transition: {
        when: "afterChildren",
        duration: 1,
        ease: [0.87, 0, 0.13, 1],
      },
    },
    out: {
      height: "100vh",
      right: 0,
    }
  };


  return (
    <div
      style={{
        position:'absolute', 
        boxShadow:'inset 0', 
        display:'flex',
        alignItems:'center',
        justifyContent:'center', 
        width:'100%'
      }}
    >
      <motion.div
        style={{
          position:'relative',
          zIndex:'50',width:'100%',
          background:'#fff'
        }}
        initial="initial"
        animate="animate"
        variants={whiteBox}
        onAnimationStart={() => document.body.classList.add("overflow-hidden")}
        onAnimationComplete={() =>
          document.body.classList.remove("overflow-hidden")
        }
      />
    </div>
  )
}


export const PurpleBoxLeftTransition = () => {
  // Scroll user to top to avoid showing the footer
  React.useState(() => {
    typeof windows !== "undefined" && window.scrollTo(0, 0);
  }, []);

  const purpleBox = {
    initial: {
      height: "100vh",
      bottom: 0,
    },
    animate: {
      height: 0,
      transition: {
        when: "afterChildren",
        duration: 1,
        ease: [0.87, 0, 0.13, 1],
      },
    },
    out: {
      height: "100vh",
      bottom: 0,
    }
  };

  return (
    <div
      style={{
        position:'absolute', 
        boxShadow:'inset 0', 
        display:'flex',
        alignItems:'center',
        justifyContent:'center', 
        width:'100%'
      }}
    >
      <motion.div
        style={{
          position:'relative',
          zIndex:'50',width:'100%',
          background:'#6c63ff'
        }}
        initial="initial"
        animate="animate"
        variants={purpleBox}
        onAnimationStart={() => document.body.classList.add("overflow-hidden")}
        onAnimationComplete={() =>
          document.body.classList.remove("overflow-hidden")
        }
      />
    </div>
  )
}