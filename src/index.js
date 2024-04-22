function prepareClassMappings(classMappings) {
    let classList = [];
    const resolveClass = (cls) => {
        // Evita loop infinito e repetição de classes
        if (classList.includes(cls)) {
            return [];
        }
        // Se a classe tem um alias ele resolve, senão ele adiciona a classe à lista.
        if (classMappings[cls]) {
            classList.push(cls);
            const classes = classMappings[cls].split(/\s+/);
            let resolvedClasses = [];
            classes.forEach(cls => {
                resolvedClasses = resolvedClasses.concat(resolveClass(cls));
            });
            return resolvedClasses;
        } else {
            classList.push(cls);
            return [cls];
        }
    }
    document.querySelectorAll('[class]').forEach(el => {
        classList = [];
        let classes = [];
        if (el.className.baseVal) {
            classes = el.className.baseVal.split(/\s+/);
        } else {
            classes = el.className.split(/\s+/);
        }
        let resolvedClasses = [];
        classes.forEach(cls => {
            resolvedClasses = resolvedClasses.concat(resolveClass(cls));
        });
        if (el.className.baseVal) {
            el.setAttribute('class', resolvedClasses.join(' '));
        } else {
            el.className = resolvedClasses.join(' ');
        }
    });
}

function executeClassMapping(classMappings) {
    let classList = [];
    const resolveClass = (cls) => {
        // Evita loop infinito e repetição de classes
        if (classList.includes(cls)) {
            return [];
        }
        // Se a classe tem um alias ele resolve, senão ele adiciona a classe à lista.
        if (classMappings[cls]) {
            classList.push(cls);
            const classes = classMappings[cls].split(/\s+/);
            let resolvedClasses = [];
            classes.forEach(cls => {
                resolvedClasses = resolvedClasses.concat(resolveClass(cls));
            });
            return resolvedClasses;
        } else {
            classList.push(cls);
            return [cls];
        }
    }
    document.querySelectorAll('[class]').forEach(el => {
        classList = [];
        let classes = [];
        if (el.className.baseVal) {
            classes = el.className.baseVal.split(/\s+/);
        } else {
            classes = el.className.split(/\s+/);
        }
        let resolvedClasses = [];
        classes.forEach(cls => {
            resolvedClasses = resolvedClasses.concat(resolveClass(cls));
        });
        if (el.className.baseVal) {
            el.setAttribute('class', resolvedClasses.join(' '));
        } else {
            el.className = resolvedClasses.join(' ');
        }
    });
}

export { prepareClassMappings, executeClassMapping };