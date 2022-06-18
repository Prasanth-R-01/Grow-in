from distutils.command.upload import upload
from statistics import mode
from django.db import models

# Create your models here.
class diseaseInfo(models.Model):
    diseaseName = models.TextField('diseaseName')
    context = models.TextField('context')

    def __str__(self):
        return self.diseaseName

class dpDetails(models.Model):
    name = models.TextField('name')
    dpimg = models.ImageField(null=True , blank=True , upload_to="data/")

    def __str__(self):
        return self.name

class cropDetails(models.Model):
    name = models.TextField('name')
    alternateName = models.TextField('alternateName')
    sowInstructions = models.TextField('sowInstructions')
    spaceInstructions = models.TextField('spaceInstructions')
    harvestInstructions = models.TextField('harvestInstructions')
    compatiblePlants = models.TextField('compatiblePlants')
    avoidInstructions = models.TextField('avoidInstructions')
    culinaryHints = models.TextField('culinaryHints')
    culinaryPreservation = models.TextField('culinaryPreservation')
    url = models.URLField('url')

    def __str__(self):
        return self.name