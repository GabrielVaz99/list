import { Component } from '@angular/core';
import { ActionSheetController, AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  tasks: any[] = [];
  handlerMessage = '';
  roleMessage = '';

  constructor(private alertCtrl: AlertController, private toastCtrl: ToastController, private actionSheetCtrl: ActionSheetController) { 
  let taskJson = localStorage.getItem('taskDb');
  if(taskJson!=null)
  {
    this.tasks = JSON.parse(taskJson);
  }
  }

  async showAdd() {
    const alert = await this.alertCtrl.create({
      header: 'O que deseja fazer ?',
      inputs: [
        {
          name: 'newTask',
          type: 'text',
          placeholder: 'O que deseja fazer ?'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancelar',
          handler: () => {
            console.log("cancelado");
          }
        },
        {
          text: 'adicionar',

          handler: (form) => {
            console.log(form.newTask);
            this.add(form.newTask);
          }
        }
      ]
    });

    await alert.present();

    // const { role } = await alert.onDidDismiss();
    //this.roleMessage = `Dismissed with role: ${role}`;

  }

  async add(newTask: string) {
    if (newTask.trim().length < 1) {
      const toast = await this.toastCtrl.create({
        message: 'informe o que deseja fazer',
        duration: 2000,
        position: 'top'
      });
      toast.present();
      return;
    }
    let task = { name: newTask, done: false };
    this.tasks.push(task);
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    localStorage.setItem('taskDb', JSON.stringify(this.tasks));
  }

  async openAction(task : any) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'O que deseja fazer',
      
      buttons: [{
        text: task.done ? 'Desmarcar' : 'Marcar',
        icon: task.done ? 'radio-button-off' : 'checkmark-circle',
        id: 'delete-button',
       
        handler: () => {
          task.done = !task.done
          this.updateLocalStorage();
        }
       
      
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }


  delete(task : any) {
    this.tasks = this.tasks.filter(taskArray => task != taskArray);
    this.updateLocalStorage();

  }


}
