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
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('[class]').forEach(el => {
            classList = [];
            const classes = el.className.split(/\s+/);
            let resolvedClasses = [];
            classes.forEach(cls => {
                resolvedClasses = resolvedClasses.concat(resolveClass(cls));
            });
            el.className = resolvedClasses.join(' ');
        });
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
        const classes = el.className.split(/\s+/);
        let resolvedClasses = [];
        classes.forEach(cls => {
            resolvedClasses = resolvedClasses.concat(resolveClass(cls));
        });
        el.className = resolvedClasses.join(' ');
    });
}

export { prepareClassMappings, executeClassMapping };