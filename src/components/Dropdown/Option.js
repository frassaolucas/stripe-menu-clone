import React, { useRef, useState, useContext, useEffect } from 'react';
import { motion } from 'framer-motion';

import { useDimensions } from './dimensions';
import { Context } from './Provider';

let lasOptionsId = 0;

export function DropdownOption({ name, content: Content, backgroundHeight }) {
  const idRef = useRef(++lasOptionsId);
  const id = idRef.current;

  const [optionHook, optionDimensions] = useDimensions();
  const [registered, setRegistered] = useState(false);

  const {
    registerOption,
    updateOptionProps,
    deleteOptionById,
    setTargetId,
    targetId,
  } = useContext(Context);

  useEffect(() => {
    if (!registered && optionDimensions) {
      const WrappedContent = () => {
        const contentRef = useRef();

        return (
          <div ref={contentRef}>
            <Content />
          </div>
        )
      }
    }
  }, []);

  return (
    <motion.button className="dropdown-option">
      {name}
    </motion.button>
  )
}
