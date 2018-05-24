
class Model {
    constructor(product) {
        this.name = 'product';
        this.product = product;
    }

    display() {
        console.log('Display', this.product);
    }

    update() {
        console.log('Updating my self');
    }

    delete() {
        console.log('Deleting my self');
    }

    read() {
        console.log('Refreshing my self');
    }

    save() {
        console.log('Saving my self');
    }

    render() {
        console.log('I can render my self also and I know my css.');
        console.log(this.view({trigger: this.product}))
    }

    view(data) {
        return (
            <div>
                <h1>Hello guys this is my view</h1>
                <p>Trigger name is : {data.trigger} </p>
            </div>
        );
    }

}

const trigger1 = new Model('trigger1');
trigger1.display();

const trigger2 = new Model('trigger2');
trigger2.display();
trigger2.update();
trigger1.render();
